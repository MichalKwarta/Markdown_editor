import React from "react";
import { FaBold, FaItalic, FaHeading } from "react-icons/fa";
import styled from "styled-components";
import FlexStyled from "../styled/Flex";
import { motion } from "framer-motion";
import SpanWithHoverAnimation from "../styled/SpanWithHoverAnimation";

const ToolbarWrapper = styled(FlexStyled)`
  background-color: ${(props) => props.theme.elementcolor};
  border-radius: 0.5rem;
  transition: background-color 0.25s ease-in;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
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

function Toolbar(props: {
  addHeading: () => void;
  italicText: () => void;
  boldText: () => void;
  plainText: string;
  setPlainText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ToolbarWrapper
      as={motion.div}
      direction="row"
      justify="center"
      align="center"
      wrap="wrap"
      width="100%"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <SpanWithHoverAnimation
        as={motion.span}
        variants={item}
        onClick={props.boldText}
      >
        <FaBold />
      </SpanWithHoverAnimation>

      <SpanWithHoverAnimation
        as={motion.span}
        variants={item}
        onClick={props.italicText}
      >
        <FaItalic />
      </SpanWithHoverAnimation>
      <SpanWithHoverAnimation
        as={motion.span}
        variants={item}
        onClick={props.addHeading}
      >
        <FaHeading />
      </SpanWithHoverAnimation>
    </ToolbarWrapper>
  );
}

export default Toolbar;
