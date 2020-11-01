import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { switchCell } from "../../redux/actions/gridActionCreators";

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
  },
  aliveCell: {
    fill: theme.palette.success.main,
    '&:hover':{
        fill: theme.palette.success.dark
      }
  },
  deadCell: {
    fill: theme.palette.error.main,
    '&:hover':{
        fill: theme.palette.error.dark
      }
  },
  svg: {
    height: "100%",
    width: "100%",
    padding: 0,
  },
}));

const Cell = (props) => {
  const classes = useStyles();
  const {cell} = props;

  const clickHandler = () => {
    props.switchCell(cell);
  };

  return (
    <div className={classes.root}>
      <svg className={classes.svg} onClick={clickHandler}>
        {cell.status === "alive" && (
          <rect className={`${classes.cell} ${classes.aliveCell}`} />
        )}
        {cell.status === "dead" && (
          <rect className={`${classes.cell} ${classes.deadCell}`} />
        )}
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
