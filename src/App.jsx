import { useState, useEffect } from "react";

function App() {
  const savedColor = localStorage.getItem("selectedColor") || "olive";
  const [colors, setColors] = useState(savedColor);

  // Save the selected color to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedColor", colors);
  }, [colors]);


  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colors }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-1 rounded-full">
          <button
          onClick={() => setColors("red")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
          onClick={() => setColors("green")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
          onClick={() => setColors("yellow")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
