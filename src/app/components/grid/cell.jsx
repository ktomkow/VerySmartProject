import React from "react";

const Cell = ({cell}) => {
    console.log("One cell: ", cell);
  return <div>{cell.status}</div>;
};

export default Cell;
