import React from "react";
import { connect } from "react-redux";

import Row from "./row";
import { Box, Container, Paper } from "@material-ui/core";

import { iterate, generate } from "../../redux/actions/gridActionCreators";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
    margin: "2em",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
  },
}));

const Grid = (props) => {
  const classes = useStyles();
  const iterate = () => {
    props.iterate();
  };

  const generate = () => {
    props.generate();
  };

  return (
    <Container className={classes.root}>
      <Button onClick={iterate}>Iterate</Button>
      <Button onClick={generate}>Generate</Button>
      <Box className={classes.grid}>
        {props.rows.map((row) => (
          <Row key={Math.random()} cells={row} />
        ))}
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { rows: state.gridReducer.rows };
};

function mapDispatchToProps(dispatch) {
  return {
    iterate: () => iterate(dispatch),
    generate: () => generate(10, 10, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
