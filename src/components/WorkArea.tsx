import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Grid from "../styled/Grid";
import GridChild from "../styled/GridChild";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const WriteArea = styled(GridChild)`
  grid-column-start: 2;
  border: 1px solid ${(props) => props.theme.color || "transparent"};
  width: 100%;
  height: 100%;
  resize: none;
  background-color: ${(props) => props.theme.elementColor || "transparent"};
  color: ${(props) => props.theme.color || "transparent"};
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1rem;
  font-family: inherit;
  letter-spacing: 0.1rem;
  transition: background-color 0.25s ease-in;

  padding: 1rem;
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

function WorkArea(props: {
  addHeading: () => void;
  italicText: () => void;
  boldText: () => void;
  plainText: string;
  setPlainText: React.Dispatch<React.SetStateAction<string>>;
  selectionSetter: Dispatch<SetStateAction<{ start: number; end: number }>>;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setPlainText(e.target.value);
  };
  return (
    <Grid
      templatecolumns="1fr 1fr"
      templaterows="1fr"
      width="100vw"
      height="100%"
      columngap="3rem"
      rowgap="1rem"
      padding="1rem"
    >
      <WriteArea
        as={motion.textarea}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        placeholder={"Write something here"}
        onChange={handleChange}
        rowstart={1}
        rowend={2}
        columnend={1}
        columnstart={1}
        onSelect={(e: ChangeEvent<HTMLTextAreaElement>) => {
          props.selectionSetter({
            start: e.target.selectionStart,
            end: e.target.selectionEnd,
          });
        }}
        value={props.plainText}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.ctrlKey) {
            switch (e.key) {
              case "b" || "B":
                props.boldText();
                break;
              case "i" || "I":
                props.italicText();
                break;
            }
          }

          if (e.ctrlKey && e.shiftKey) {

            switch (e.key) {
              case "h" || "H":
                props.addHeading();

                break;
            }
          }
        }}
      ></WriteArea>
      <WriteArea
        as={motion.div}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        rowstart={1}
        rowend={2}
        columnend={2}
        columnstart={2}
        className="workarea__markdown"
      >
        <ReactMarkdown children={props.plainText} className="markdown" />
      </WriteArea>
    </Grid>
  );
}

export default WorkArea;
