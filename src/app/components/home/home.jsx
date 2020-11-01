import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "../grid/grid";

const useStyles = makeStyles((theme) => ({}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid />
    </div>
  );
};

export default Home;
