import FlexStyled from "./Flex";
 import styled from "styled-components";

const FlexCard = styled(FlexStyled)`
    border-radius: 0.5rem;
    background-color: ${props => props.theme.elementColor};
    border:1px solid ${props => props.theme.color};
    padding:2rem;
    box-shadow: 0 0.5rem 1.5rem ${props => props.theme.color+"40"};

`

export default FlexCard;