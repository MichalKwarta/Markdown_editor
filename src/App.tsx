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
import Toolbar from "./components/Toolbar";

function App() {
  const [t, setTheme] = React.useState<"light" | "dark">("dark");
  const [selection, setSelection] = React.useState({ start: 0, end: 0 });
  const toggleTheme = () => {
    if (t === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };


  const [plainText, setPlainText] = React.useState<string>("Write something here");

  const icon = t === "light" ? MoonIcon : sunIcon;

  return (
    <ThemeProvider theme={theme[t]}>
      <GlobalStyle {...theme[t]} />
      <FlexStyled height="100vh">
        <FlexStyled
          width="100vw"
          direction="row"
          justify="space-between"
          align="center"
          extra="padding:1rem 3rem;"
          as={motion.div}
          isbg={1}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Awesome Notes App</h1>
          <Toolbar selection={ selection}  plainText={plainText} setPlainText={ setPlainText} />
          <Toggle
            as={motion.div}
            onClick={toggleTheme}
            darkmode={t !== "light" ? 1 : 0}
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

        <WorkArea selectionSetter={setSelection} plainText={plainText} setPlainText={ setPlainText}/>
      </FlexStyled>
    </ThemeProvider>
  );
}
export default App;

// Type '{ selectionSetter: Dispatch<SetStateAction<{ start: number; end: number; }>>; }' is not assignable to type 'IntrinsicAttributes & Dispatch<SetStateAction<{ start: number; end: number; }>>'.
  // Property 'selectionSetter' does not exist on type 'IntrinsicAttributes & Dispatch<SetStateAction<{ start: number; end: number; }>>'.