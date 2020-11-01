import React from "react";

import Cell from "./cell";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        flexDirection: "row"
    }
}));

const Row = ({ row }) => {
  const classes = useStyles();
  console.log("Row:::", row)
  return (
    <Box className={classes.root}>
      {row.cells.map((cell) => (
        <Cell key={Math.random()} cell={cell} />
      ))}
    </Box>
  );
};

export default Row;
