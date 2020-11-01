import React from "react";

import Cell from "./cell";

const Row = ({ cells }) => {
  console.log("Cells: ", cells);
  return (
    <div>
      {cells.map((cell) => (
        <Cell key={Math.random()} cell={cell} />
      ))}
    </div>
  );
};

export default Row;
