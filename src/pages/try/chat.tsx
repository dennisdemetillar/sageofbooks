import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);
    setChatHistory((prevChat: any) => [
      ...prevChat,
      { role: "user", content: userInput },
    ]);

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [...chatHistory, { role: "assistant", content: userInput }],
    });
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "assistant", content: chatCompletion.choices[0].message.content },
    ]);
    setUserInput("");
    setIsLoading(false);
  };

  return (
    <div>
      <div>Hi</div>
      <div className="py-10 h-56 w-full">
        {chatHistory.map((message, index) => (
          <div key={index} className="flex flex-row">
            <div>{message.role}</div>
            <div>{message.content}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Ask me something..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <button onClick={handleUserInput}>Ask</button>
        )}
      </div>
    </div>
  );
}
