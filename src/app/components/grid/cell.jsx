import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        height: 20,
        width: 20
    },
    cell: {
        height: "100%",
        width: "100%",
        margin: 0,
        
        padding: 0
    },
    aliveCell: {
        fill: theme.palette.success.main,
    },
    deadCell: {
        fill: theme.palette.error.main,
    },
    svg: {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0
    }
}));

const Cell = ({ cell }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <svg className={classes.svg}>
        {cell.status === "alive" && <rect className={`${classes.cell} ${classes.aliveCell}`} />}
        {cell.status === "dead" && <rect className={`${classes.cell} ${classes.deadCell}`} />}
      </svg>
    </div>
  );
};

export default Cell;
