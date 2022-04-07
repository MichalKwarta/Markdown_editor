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
import {sliceHelper} from './helpers/helperfunctions'



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
  const boldText = () => { 
    if (selection.start===selection.end) return
    if (selection.start >= 0 && selection.end <= plainText.length) {
      if (plainText[selection.start - 2] === '*' && plainText[selection.end + 1] === "*") {
          
        setPlainText(sliceHelper(plainText,[0, selection.start-2], [selection.start, selection.end] ,[selection.end+2]))

      }
      else if (plainText[selection.start] === '*' && plainText[selection.end-1] === "*") {
        setPlainText(sliceHelper(plainText,[0, selection.start], [selection.start+2, selection.end-2],[selection.end]))
          
      }
      else {
          setPlainText(plainText.slice(0, selection.start) + "**" + plainText.slice(selection.start, selection.end) + "**" + plainText.slice(selection.end))

      }
      

  }
  }

  const icon = t === "light" ? MoonIcon : sunIcon;

  return (
    <ThemeProvider theme={theme[t]}>
      <GlobalStyle {...theme[t]} />
      <FlexStyled height="100%" wrap="nowrap">
        <FlexStyled
          width="100%"
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
          <Toolbar selection={selection} plainText={plainText} setPlainText={setPlainText}
          boldText={boldText}/>
          
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

        <WorkArea selectionSetter={setSelection} plainText={plainText} setPlainText={setPlainText}
          boldText={ boldText}
        />
      </FlexStyled>
    </ThemeProvider>
  );
}
export default App;

// Type '{ selectionSetter: Dispatch<SetStateAction<{ start: number; end: number; }>>; }' is not assignable to type 'IntrinsicAttributes & Dispatch<SetStateAction<{ start: number; end: number; }>>'.
  // Property 'selectionSetter' does not exist on type 'IntrinsicAttributes & Dispatch<SetStateAction<{ start: number; end: number; }>>'.