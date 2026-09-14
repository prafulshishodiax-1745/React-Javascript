import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
  className="h-screen w-full transition-colors duration-200"
  style={{ backgroundColor: color }}
>
  <div className="fixed bottom-12 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-3 rounded-3xl bg-white px-3 py-2 shadow-lg">
    <button
      onClick={() => setColor("red")}
      className="rounded-full bg-red-500 px-4 py-1 text-white shadow-lg"
    >
      Red
    </button>

    <button
      onClick={() => setColor("green")}
      className="rounded-full bg-green-500 px-4 py-1 text-white shadow-lg"
    >
      Green
    </button>

    <button
      onClick={() => setColor("blue")}
      className="rounded-full bg-blue-500 px-4 py-1 text-white shadow-lg"
    >
      Blue
    </button>

    <button
      onClick={() => setColor("orange")}
      className="rounded-full bg-orange-500 px-4 py-1 text-white shadow-lg"
    >
      Orange
    </button>

    <button
      onClick={() => setColor("#ffff00")}
      className="rounded-full bg-yellow-500 px-4 py-1 text-black shadow-lg"
    >
      Yellow
    </button>

    <button
      onClick={() => setColor("pink")}
      className="rounded-full bg-pink-500 px-4 py-1 text-white shadow-lg"
    >
      pink
    </button>

    <button
      onClick={() => setColor("black")}
      className="rounded-full bg-black px-4 py-1 text-white shadow-lg"
    >
      black
    </button>


    
  </div>
</div>
  )
}

export default App
