import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import lime from "@material-ui/core/colors/lime";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { green, red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
    success: green,
    error: red
  },
  status: {
    danger: "orange",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: lime,
    secondary: lightBlue,
  },
  status: {
    danger: "orange",
  },
});
