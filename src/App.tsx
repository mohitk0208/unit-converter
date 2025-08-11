import LenghtConverter from "./components/LengthConverter"


function App() {

  return (
    <div className='w-full h-full p-5 '>
      <h1 className="text-4xl font-bold my-1">Unit Converter</h1>

      <div className="my-2">
        List the converters here...

        <LenghtConverter />
      </div>

    </div>
  )
}

export default App
