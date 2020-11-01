import React, { useEffect } from "react";

import Cell from "./cell";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    flexDirection: "row",
  },
}));

const Row = (props) => {
  const classes = useStyles();
  const { row } = props;

  return (
    <Container className={classes.row}>
      {row.cells.map((cell) => (
        <Cell key={Math.random()} cell={cell} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { gridReducer: state.gridReducer };
};

export default connect(mapStateToProps, null)(Row);
