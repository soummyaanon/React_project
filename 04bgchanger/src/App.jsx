import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-full flex items-center justify-center"
    style={{backgroundColor: color}}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        >Red</button>
        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
        >Green</button>
        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        >Blue</button>
        <button
        onClick={() => setColor("yellow")} 
        className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "yellow"}}
        >Yellow</button>
      </div>
    </div>
  )
}

export default App