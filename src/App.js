import { useState } from 'react'
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button disabled={disabled} data-testid="minus-button" onClick = {() => setCounter(count => count - 1)}>-</button>
          <button disabled={disabled} data-testid="plus-button" onClick = {() => setCounter(count => count + 1)}>+</button>
        </div>
      </header>
      <div>
        <button
          data-testid = "on/off-button"
          style={{
            backgroundColor: "blue"
          }}
          onClick = {() => setDisabled(bool => !bool)}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
