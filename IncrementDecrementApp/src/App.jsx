import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>ADD</button>
        <button onClick={() => setCount((count) => count - 1)}>SUB</button>
        <h1>count is {count}</h1>
      </div>
    </>
  );
}

export default App;
