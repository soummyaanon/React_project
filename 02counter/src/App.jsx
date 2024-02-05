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

  const resetCounter = () => {
    setCounter(5);
  }

  return (
    <div className="App">
      <h1>My First React Project</h1>
      <h2> Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removevalue}>Subtract Value</button>
      <footer> 
        Footer {counter}
        <button onClick={resetCounter}>Reset Counter</button>
      </footer>
    </div>
  );
}

export default App;