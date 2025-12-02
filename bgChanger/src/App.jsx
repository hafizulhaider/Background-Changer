import { useState } from "react"


function App() {

  const [color, setColor] = useState("white")

  const [colorName, setColorName] = useState("White")
  

  return (
    <>
    

    <div className="w-full h-screen duration-300 ease-in-out"
    style={{backgroundColor: color}}
    >
      <div className="flex justify-center items-center h-screen">
      <h1 className="text-5xl font-black bg-blue-400 p-4 rounded-lg">{colorName}</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-4">
        <div className="backdrop-blur-md flex flex-wrap justify-center gap-3 shadow-lg bg-white/70 rounded-lg px-3 py-2">
          <button
          onClick={() => {setColor("red");
            setColorName("Red")
          }}
          className="outline-none px-4 py-2 text-white rounded-lg hover:opacity-80 active:scale-95"
          style={{backgroundColor: "red"}}
          >
            Red
          </button>
          <button
          onClick={() => {setColor("green");
            setColorName("Green")
          }}
          className="outline-none px-4 py-2 text-white rounded-lg hover:opacity-80 active:scale-95"
          style={{backgroundColor: "green"}}
          >
            Green
          </button>
          <button
          onClick={() => {setColor("purple");
            setColorName("Purple")
          }}
          className="outline-none px-4 py-2 text-white rounded-lg hover:opacity-80 active:scale-95"
          style={{backgroundColor: "purple"}}
          >
            Purple
          </button>
          <button
          onClick={() => {setColor("blue");
            setColorName("Blue")
          }}
          className="outline-none px-4 py-2 text-white rounded-lg hover:opacity-80 active:scale-95"
          style={{backgroundColor: "blue"}}
          >
            Blue
          </button>
          <button
          onClick={() => {setColor("tomato");
            setColorName('Tomato');
          }}
          className="outline-none px-4 py-2 text-white rounded-lg hover:opacity-80 active:scale-95"
          style={{backgroundColor: "tomato"}}
          >
            Tomato
          </button>
        </div>
      </div>
    </div>
       
    </>
  )
}

export default App
