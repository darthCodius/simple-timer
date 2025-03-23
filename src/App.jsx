import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <button className="btn-primary" onClick={incrementCount}>
        +
      </button>
      {count}
      <button className="btn-primary" onClick={decrementCount}>
        -
      </button>
    </>
  );
}

export default App;
