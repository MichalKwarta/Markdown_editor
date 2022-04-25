import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input<{myplaceholder?:string}>`
    border: 1px solid ${props => props.theme.color};
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    border-radius: 0.5rem;
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    padding: 1.25rem 1rem;
    margin:1rem 0;
    position:relative;
    &:blank{
        outline: none;
        &+label{
            transform:none;
            left:0;
        }
    }

  

`;
const StyledLabel = styled(motion.label)`
    position:absolute;
    z-index:10;
    width:100%;
    top:50%;
    left:1rem;
    transform:translateY(-50%);
    transition:0.5s ease-in


`


function StyledInput(props: { myplaceholder: string, id: string, type: string }) {
    const variants = {
        initial: {},
        focused: {
            top: "5%",
            transition: {
                ease: "easeIn",
            }
            
        }
    }
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <>
            <div style={{position:'relative'}}>
                <Input myplaceholder={props.myplaceholder} id={props.id} type={props.type}   onFocus={()=>setIsFocused(true)} />
                <StyledLabel variants={variants} animate={isFocused?"focused":"initial" } htmlFor={props.id}>{ props.myplaceholder} </StyledLabel>
            </div>

            
        </>
  )
}



export default StyledInput
