import React from "react";

function AlgorithmSelector() {
  return (
    <div className="container">
      <label>
        Selected algorithm:
        <select>
          <option>BFS</option>
          <option>Djikstra</option>
          <option>A*</option>
        </select>
      </label>
    </div>
  );
}

export default AlgorithmSelector;
