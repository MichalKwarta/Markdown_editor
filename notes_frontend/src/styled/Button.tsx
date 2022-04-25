import styled from "styled-components"

const StyledButton = styled.button`
    border: 1px solid ${props => props.theme.color};
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    font-size: 1.25rem;
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.color};
`

export default StyledButton