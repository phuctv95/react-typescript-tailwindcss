import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-7 pt-20">
      <div className="flex gap-8">
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="flex items-center"
        >
          <img
            src={viteLogo}
            alt="Vite logo"
            className="w-20 hover:drop-shadow-[0_15px_15px_rgba(186,55,254,0.4)]"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="flex items-center"
        >
          <img
            src={reactLogo}
            alt="React logo"
            className="w-20 hover:drop-shadow-[0_15px_15px_rgba(0,216,255,0.4)]"
          />
        </a>
      </div>

      <h1 className="my-3 rounded-br-xl rounded-tl-xl bg-gradient-to-r from-yellow-600 to-orange-600 px-5 py-3 text-5xl text-orange-50 drop-shadow-[5px_5px_0px_rgba(124,45,18,1)]">
        Vite + React
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="rounded-md border-t-[2px] border-t-orange-300 bg-orange-500 px-4 py-2 text-orange-100 drop-shadow-[0_7px_0px_rgba(154,52,18,1)] active:relative active:top-[4px] active:drop-shadow-[0_3px_0px_rgba(154,52,18,1)]"
      >
        count is {count}
      </button>

      <p>
        Edit{' '}
        <code className="rounded bg-stone-700 px-1 font-mono">src/App.tsx</code>{' '}
        and save to test HMR
      </p>

      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
