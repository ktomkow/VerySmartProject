import React from "react";
import { connect } from "react-redux";

import Row from "./row";
import { Box, Container, Paper, Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";

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
  input: {
    width: 50,
  },
}));

const Grid = (props) => {
  const classes = useStyles();
  const [width, setWidth] = React.useState(10);
  const [height, setHight] = React.useState(10);
  const iterate = () => {
    props.iterate();
  };

  const generate = () => {
    props.generate(width, height);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleHeightChange = (event) => {
    setHight(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlurWidth = () => {
    if (width < 1) {
      setWidth(1);
    } else if (width > 20) {
      setWidth(20);
    }
  };

  const handleBlurHeight = () => {
    if (height < 1) {
      setHight(1);
    } else if (height > 20) {
      setHight(20);
    }
  };

  return (
    <Container className={classes.root}>
      <Button onClick={iterate}>Iterate</Button>
      <Button onClick={generate}>Generate</Button>
      <Typography>Width: </Typography>
      <Input
        className={classes.input}
        value={width}
        margin="dense"
        onChange={handleWidthChange}
        onBlur={handleBlurWidth}
        inputProps={{
          step: 1,
          min: 1,
          max: 30,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
      <Typography>Height: </Typography>
      <Input
        className={classes.input}
        value={height}
        margin="dense"
        onChange={handleHeightChange}
        onBlur={handleBlurHeight}
        inputProps={{
          step: 1,
          min: 1,
          max: 30,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
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
    generate: (rows, cols) => generate(rows, cols, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
