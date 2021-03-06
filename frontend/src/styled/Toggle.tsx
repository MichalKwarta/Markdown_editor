import styled from "styled-components";


const Toggle = styled.button<{darkmode:1|0}>`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    padding:1rem;
    border:1px solid ${props => props.theme.color || 'transparent'};
    background-color: ${props => props.theme.elementColor};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
    &:focus {
        outline: none;
    }
    &:hover {
    background-color: ${props => props.theme.color};
    &>img
    {
    ${props => props.darkmode!==1? '-webkit-filter:invert(1);':'-webkit-filter:invert(0);'}
        
    }


    }
    transition: all .5s ease;
    &>img{
    transition: all .5s ease;
    ${props =>  props.darkmode===1?'-webkit-filter:invert(1);':'-webkit-filter:invert(0);'}

        
    }
`;
export default Toggle