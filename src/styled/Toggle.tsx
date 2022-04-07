import styled from "styled-components";


const Toggle = styled.button<{darkmode:boolean}>`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    padding:1rem;
    border:1px solid ${props => props.theme.color || 'transparent'};
    background-color: ${props => props.theme.elementColor};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
    &>img{
    transition: all .5s ease;
    ${props => props.darkmode && 'filter:invert(1);'}

        
    }
`;
export default Toggle