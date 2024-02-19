import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3 pt-20">
      <div className="flex gap-5">
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="flex items-center"
        >
          <img src={viteLogo} alt="Vite logo" className="w-14" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="flex items-center"
        >
          <img src={reactLogo} alt="React logo" className="w-14" />
        </a>
      </div>

      <h1 className="my-3 text-3xl">Vite + React</h1>

      <button
        onClick={() => setCount((count) => count + 1)}
        className="rounded px-4 py-1 hover:bg-zinc-100"
      >
        count is {count}
      </button>

      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>

      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
