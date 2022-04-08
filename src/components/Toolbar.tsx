import React from "react";
import { FaBold, FaItalic, FaHeading } from "react-icons/fa";
import styled from "styled-components";
import FlexStyled from "../styled/Flex";
import { motion } from "framer-motion";
import SpanWithHoverAnimation from "../styled/SpanWithHoverAnimation";

const ToolbarWrapper = styled(FlexStyled)`
  background-color: ${(props) => props.theme.bg};
  border-radius: 0.5rem;
  transition: background-color 0.25s ease-in;

  & > * {
    border: 1px solid ${(props) => props.theme.color};
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0 0.3rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.5,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "-100%" },
  show: { opacity: 1, y: 0 },
};

const sliceHelper = (str:string, ...slices:number[][]) => { 
    
    let newString = ""
    for (const sliceElem of slices) { 
        newString+=str.slice(...sliceElem)
    }
    return newString
}

function Toolbar(props: {italicText:()=>void,boldText:()=>void, selection: { start: number, end: number },plainText:string,setPlainText:React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <ToolbarWrapper
      as={motion.div}
      direction="row"
      justify="center"
      align="center"
      wrap="wrap"
      width="20%"
      variants={container}
      initial="hidden"
      animate="show"
      
    >
      <SpanWithHoverAnimation as={motion.span} variants={item} onClick={props.boldText}
        
        >
        <FaBold />
      </SpanWithHoverAnimation>

      <SpanWithHoverAnimation as={motion.span} variants={item} onClick={ props.italicText}>
        <FaItalic />
      </SpanWithHoverAnimation>
      <SpanWithHoverAnimation as={motion.span} variants={item}>
        <FaHeading />
      </SpanWithHoverAnimation>
    </ToolbarWrapper>
  );
}

export default Toolbar;
