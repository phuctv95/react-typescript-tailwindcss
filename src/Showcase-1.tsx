export function Showcase1() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-16 bg-sky-950">
      <div className="animate-shadow-blinking font-gluten bg-purple-800 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text font-sans text-6xl font-black uppercase text-transparent">
        Enjoy our night!
      </div>
      <button className="font-gluten select-none rounded-md border-t-2 border-t-purple-300 bg-purple-400 px-5 py-3 text-3xl text-purple-950 shadow-[0_6px_0px_0px_rgba(126,34,206,1)] active:relative active:top-[4px] active:shadow-[0_2px_0px_0px_rgba(126,34,206,1)] active:drop-shadow-[0px_0px_20px_rgba(126,34,206,0.5)]">
        Let's have fun!
      </button>
    </div>
  );
}
