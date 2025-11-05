import React, { useState } from "react";
import "./App.css"

function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setresult] = useState(null);
  
  
  const handleMultiply = () => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setresult(num1 * num2)
    } else {
      setresult("Please enter valid numbers")
    }
  };

  return(
    <div className="card">
      <h1>Multiply</h1>
      <div className="input-group">
        <label>Enter operand 1</label>
        <input
        type="number"
        value={operand1}
        onChange={(e) => setOperand1(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Enter operand 2</label>
        <input
          type="number"
          value={operand2}
          onChange={(e) => setOperand2(e.target.value)}
        />
      </div>

      <p>
        <strong>Result</strong> {result !== null ? result : ""}
      </p>

      <button onClick={handleMultiply}>Multiply</button>

    </div>
  )
}
export default App;