import './App.css';
import { useState } from 'react';
import ParentComponent from './components/ParentComponent'

function App() {
  const [number, serNumber] = useState(0);

  const incrementNumber = () => {
    serNumber(number + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world "Data Up, Action Down"</h1>
        <ParentComponent number={number} onHandleClick={incrementNumber} />
      </header>
    </div>
  );
}

export default App;
