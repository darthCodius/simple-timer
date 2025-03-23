import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((curr) => curr + 1);
  };

  return (
    <>
      <button className="btn-primary" onClick={handleIncrement}>
        {count}
      </button>
    </>
  );
}

export default App;
