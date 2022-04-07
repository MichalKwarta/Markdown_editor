import * as React from "react";
import { ThemeProvider } from "styled-components";
// import { Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./helpers/theme";
import GlobalStyle from "./helpers/GlobalStyle";
import FlexStyled from "./styled/Flex";
import Toggle from "./styled/Toggle";
import MoonIcon from "./resources/moon.svg";
import sunIcon from "./resources/sun.svg";
import WorkArea from "./components/WorkArea";

function App() {
  const [t, setTheme] = React.useState<"light" | "dark">("light");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (t === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };
  const icon = t === "light" ? MoonIcon : sunIcon;

  return (
    <ThemeProvider theme={theme[t]}>
      <GlobalStyle {...theme[t]} />
      <FlexStyled
          height="100vh"
       
      >
        <FlexStyled
          width="100vw"
          direction="row"
          justify="space-between"
          align="start"
          extra="padding:1rem 3rem;"
          as={motion.div}
          isbg={ 1}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          
        >
          <h1>Welcome to React Router!</h1>
          <Toggle
            as={motion.div}
            onClick={() => { toggleTheme(); console.log(window.getSelection()!.toString()) }}
            darkmode={t !== "light"?1:0}
          >
            <motion.img
              key={icon}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              src={icon}
              alt=""
            />
          </Toggle>
        </FlexStyled>

        <WorkArea></WorkArea>


      </FlexStyled>
    </ThemeProvider>
  );
}
export default App;
