import React, { useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([]);
  const [fruit, setFruit] = useState();

  const handleChange = (e) => {
    const item = e.target.value;
    setFruit(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFruits([...fruits, fruit]);
    setFruit("");
  };

  console.log("fruitsList", fruits);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="fruit" value={fruit} type="text" onChange={handleChange} />
        <button type="submit">Add fruit</button>
      </form>

      <ul>
        {fruits.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
