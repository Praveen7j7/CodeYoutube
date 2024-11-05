

import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter]= useState(15);
  
  
  const addValue = () => {
    console.log('clicked', counter);
    if(counter<20)
    setCounter(counter+1);
  }
  const subValue = () => {
    console.log('clicked', counter);
    if(counter>0)
    setCounter(counter-1);
  }
  /*useState hook is reponsible for changing the state of the hook
  change does not mean ki value hi change kardi,
  change means the change in the DOM structure */
  
  return (
    <>
    <h1>Pundi the Gundi</h1>
    <h3>Counter value: {counter}</h3>

    <button onClick={addValue}>Add Value : {counter}</button>
    <br />
    <button onClick={subValue}>Decrease Value : {counter}</button>

    <p>{counter}</p>
    
    </>
  )
}

export default App
