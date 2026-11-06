import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  // let counter = 15

  const addValue = () =>{
    console.log("Value added",counter);
    counter = counter+1
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br></br>
    <button
    onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
