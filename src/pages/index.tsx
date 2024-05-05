import Chatbot from "./chatbot";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-y-3 flex-col py-10">
        <h1 className="tracking-tight text-4xl sm:text-6xl font-bold text-white">
          Sage of the books
        </h1>
        <p className="max-w-xl text-center text-lg text-slate-400">
          A wise entity steeped in all knowledge, earned through the mastery of
          every tome on Earth
        </p>
      </div>
      <Chatbot />
    </>
  );
}
