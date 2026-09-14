import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  /* Normal Approach =>
     let counter = 15;
  const addValue = () => {
    if(counter === 20)
      alert("decrease the value")
    else {
    counter = counter + 1;
    console.log(counter);
    }
  }
  const subtractValue = () =>{
    if(counter === 0)
      alert("increase the value")
    else{
    counter = counter - 1;
    console.log(counter)
    } */


// React Approach

    const [counter, setCounter] = useState(15);

    const addValue = () => {
        if (counter === 20) {
            alert("decrease the value");
        } else {
            setCounter(counter + 1);
        }
    };

    const subtractValue = () => {
        if (counter === 0) {
            alert("increase the value");
        } else {
            setCounter(counter - 1);
        }
    };

  

  /* Normal Approach =>
     let counter = 15;
  const addValue = () => {
    if(counter === 20)
      alert("decrease the value")
    else {
    counter = counter + 1;
    console.log(counter);
    }
  }
  const subtractValue = () =>{
    if(counter === 0)
      alert("increase the value")
    else{
    counter = counter - 1;
    console.log(counter)
    } */
  


  return ( 
    <>
    <h1>Counter Value  =  {counter}</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}
export default App
