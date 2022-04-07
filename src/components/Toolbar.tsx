import React from "react";
import { FaBold, FaItalic, FaHeading } from "react-icons/fa";
import styled from "styled-components";
import FlexStyled from "../styled/Flex";
import { motion } from "framer-motion";

const ToolbarWrapper = styled(FlexStyled)`
  background-color: ${(props) => props.theme.bg};
  border-radius: 0.5rem;

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
          delayChildren:0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0,y:"-100%" },
    show: { opacity: 1,y:0 }
  }

function Toolbar() {
  return (
    <ToolbarWrapper
          as={motion.div}
          direction="row"
          justify="center"
          align="center"
          width="20%"
          variants={container}
          initial="hidden"
          animate="show"    >
      <motion.span  variants={item}>
        <FaBold />
          </motion.span>
          
      <motion.span  variants={item}>
        <FaItalic />
      </motion.span>
      <motion.span  variants={item}>
        <FaHeading />
      </motion.span>
    </ToolbarWrapper>
  );
}

export default Toolbar;
