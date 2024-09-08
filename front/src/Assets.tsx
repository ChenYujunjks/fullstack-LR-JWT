import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col   p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
