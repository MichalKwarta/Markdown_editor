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



function Toolbar(props: { selection: { start: number, end: number },plainText:string,setPlainText:React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <ToolbarWrapper
      as={motion.div}
      direction="row"
      justify="center"
      align="center"
      width="20%"
      variants={container}
      initial="hidden"
      animate="show"
    >
          <SpanWithHoverAnimation as={motion.span} variants={item} onClick={() => {
              
              if (props.selection.start >= 2 && props.selection.end <= props.plainText.length) {
                  console.log(props.selection)
                  if (props.plainText[props.selection.start - 2] === '*' && props.plainText[props.selection.end + 1] === "*") {
                      
                    props.setPlainText(props.plainText.slice(0, props.selection.start-2)  + props.plainText.slice(props.selection.start, props.selection.end)  + props.plainText.slice(props.selection.end+2))

                  }
                  else if (props.plainText[props.selection.start] === '*' && props.plainText[props.selection.end-1] === "*") {
                    props.setPlainText(props.plainText.slice(0, props.selection.start)  + props.plainText.slice(props.selection.start+2, props.selection.end-2)  + props.plainText.slice(props.selection.end))
                      
                    console.log("CHUJ")
                  }
                  else {
                      props.setPlainText(props.plainText.slice(0, props.selection.start) + "**" + props.plainText.slice(props.selection.start, props.selection.end) + "**" + props.plainText.slice(props.selection.end))

                  }

              }
          }}>
        <FaBold />
      </SpanWithHoverAnimation>

      <SpanWithHoverAnimation as={motion.span} variants={item}>
        <FaItalic />
      </SpanWithHoverAnimation>
      <SpanWithHoverAnimation as={motion.span} variants={item}>
        <FaHeading />
      </SpanWithHoverAnimation>
    </ToolbarWrapper>
  );
}

export default Toolbar;
