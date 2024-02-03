// Remove unused imports
import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter<30){
      setCounter(counter + 1);
    }
  };

  const removevalue = () => {
    if (counter>0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>My First React Project</h1>
      <h2> Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter} </button>
      <br />
      <button onClick={removevalue}>Subtract Value {counter}</button>
      <br/>
      <footer> Foooter {counter}</footer>
    </>
  );
}

export default App;
