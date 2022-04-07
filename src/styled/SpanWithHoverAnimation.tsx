import styled from "styled-components";

const SpanWithHoverAnimation = styled.span`
  transition: 0.1s;
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.elementColor};
    transition: 0.1s;
    cursor: pointer;
  }
`;
export default SpanWithHoverAnimation;