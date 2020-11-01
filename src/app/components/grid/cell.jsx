import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { switchCell } from "../../redux/actions/gridActionCreators";
import { green, orange } from "@material-ui/core/colors";
import indigo from "@material-ui/core/colors/indigo";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    height: 20,
    width: 20,
  },
  cell: {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    fill: (props) => props.cellColor,
    "&:hover": {
      fill: (props) => props.hoveredCellColor,
    },
  },
  svg: {
    height: "100%",
    width: "100%",
    padding: 0,
  },
}));

const Cell = (props) => {
  const mapPowerToColor = (power) => {
    let number = power;
    if(!number) {
      number = 0;
    }
    if(number > 238) {
      number = 238;
    }

    number = number + (255-238);
    number = 255 - number;
    const value = number.toString(16);

    return { cellColor: `#${value}${value}${value}`, hoveredCellColor: "#00FF00" };
  };
  
  const { cell } = props;
  const colors = mapPowerToColor(cell.power);
  const classes = useStyles(colors);

  const clickHandler = () => {
    console.log("Cell:", cell);
    props.switchCell(cell);
  };

  return (
    <div className={classes.root}>
      <svg className={classes.svg} onClick={clickHandler}>
        <rect className={classes.cell} />
      </svg>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    switchCell: (cell) => switchCell(cell, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Cell);
