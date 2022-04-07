import * as React from "react";
import { ThemeProvider } from "styled-components";
// import { Routes } from "react-router-dom";
import theme from "./helpers/theme";
import GlobalStyle from "./helpers/GlobalStyle";
import FlexStyled from "./styled/Flex";
import Toggle from "./styled/Toggle";
import MoonIcon  from './resources/moon.svg'
import sunIcon from './resources/sun.svg'


function App() {
  const [t, setTheme] = React.useState<"light"|"dark">('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (t === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  const icon = t === 'light' ? MoonIcon : sunIcon;

  return (
    
    <ThemeProvider theme={ theme[t]}>
      <GlobalStyle {...theme[t]}/>
      <FlexStyled height='100vh' width='100vw' justify="start"  isBg={true} >
        <FlexStyled width="100vw" direction="row" justify="space-between" align="start"  extra="padding:1rem 3rem;" isBg={ false}>
          <h1>Welcome to React Router!</h1>
          <Toggle onClick={toggleTheme} darkmode={ t!=="light"}>
            <img src=  {
        icon
            } alt="" />
          
          </Toggle>

        </FlexStyled>
        
        </FlexStyled>
        
        
    </ThemeProvider>
      
  );
}
export default App