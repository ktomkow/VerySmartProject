import React from "react";
import { connect } from "react-redux";

import Row from "./row";

import { iterate, generate } from "../../redux/actions/gridActionCreators";
import { Button } from "@material-ui/core";

const Grid = (props) => {
  const iterate = () => {
    props.iterate();
  };

  const generate = () => {
    props.generate();
  };

  return (
    <div>
      <Button onClick={iterate}>Iterate</Button>
      <Button onClick={generate}>Generate</Button>
      {props.rows.map((row) => (
        <Row key={Math.random()} cells={row} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { rows: state.gridReducer.rows };
};

function mapDispatchToProps(dispatch) {
  return {
    iterate: () => iterate(dispatch),
    generate: () => generate(10, 10, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
