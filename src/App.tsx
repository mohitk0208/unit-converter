import LengthConverter from "./components/LengthConverter"
import WeightConverter from "./components/WeightConverter"


function App() {

  return (
    <div className='w-full h-full p-5 '>
      <h1 className="text-4xl font-bold my-1">Unit Converter</h1>

      <div className="my-2 flex gap-5" >
        <LengthConverter />
        <WeightConverter />
      </div>

    </div>
  )
}

export default App
