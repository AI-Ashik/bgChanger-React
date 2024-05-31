import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
      className="flex justify-center items-center h-screen w-full"
    >
      <div className="bg-white rounded-lg shadow-md p-4 w-1/2 h-1/2 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Color Changer</h2>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("white")}
            className="bg-gray-400 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded ml-4"
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
