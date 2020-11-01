import React from "react";

import Cell from "./cell";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Row = ({ cells }) => {
  const classes = makeStyles();
  return (
    <div>
      {cells.map((cell) => (
        <Cell key={Math.random()} cell={cell} />
      ))}
    </div>
  );
};

export default Row;
