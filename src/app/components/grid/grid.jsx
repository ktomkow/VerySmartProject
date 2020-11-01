import React from "react";
import { connect } from "react-redux";

import Row from "./row";

import { iterate } from "../../redux/actions/gridActionCreators";
import { Button } from "@material-ui/core";

const Grid = (props) => {
  const iterate = () => {
    props.iterate();
  };
  console.log("Rows:", props.rows);
  return (
    <div>
      <Button onClick={iterate}>Iterate</Button>

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
