import React, { useState } from "react";
import { theme, darkTheme } from "../themes/theme";
import strings from "../localization/strings";


import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const Tmp = (props) => {
  const [currentTheme, setTheme] = useState(theme);
  const switchTeme = () => {
    if (currentTheme === theme) {
      setTheme(darkTheme);
      strings.setLanguage('pl');
    } else {
      setTheme(theme);
      strings.setLanguage('en');
    }
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <Button onClick={switchTeme}>Switch</Button>
      {props.children}
    </ThemeProvider>
  );
};

export default Tmp;
