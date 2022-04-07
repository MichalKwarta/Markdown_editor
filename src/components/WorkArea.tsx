import  { useState } from 'react'
import Grid from '../styled/Grid'
import GridChild from '../styled/GridChild'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const WriteArea = styled(GridChild)`
    grid-column-start: 2;
    border:1px solid ${props => props.theme.color || 'transparent'};
    width:100%;
    height:100%;
    resize: none;
    background-color: ${props => props.theme.elementColor || 'transparent'};
    color: ${props => props.theme.color || 'transparent'};
    border-radius:1rem;
    padding:1rem;
    font-size:1rem;
    font-family:inherit;
    letter-spacing:0.1rem;
    
    &:focus {
        outline:none;
    }

    &::-webkit-scrollbar{
        display:none;
    }
    
`
    


function WorkArea() {
    const [plainText, setPlainText] = useState<string>('Write something here')
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlainText(e.target.value)
    }
    return (
        <Grid templateColumns='1fr 1fr' templateRows='0.05fr 0.95fr' width='100%' height='90%' columnGap="3rem" rowGap="1rem" >
            <GridChild  rowStart={1} rowEnd={1} columnStart={1} columnEnd={3} >
aaasd
            </GridChild>
            <WriteArea as={motion.textarea}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                placeholder={"Write something here"}
                onChange={handleChange} rowStart={2} rowEnd={2} columnEnd={1} columnStart={1}></WriteArea>
            <WriteArea as={motion.div}
                
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                
                rowStart={2} rowEnd={2} columnEnd={2} columnStart={2}>{plainText}</WriteArea>



        </Grid>            
  )
}

export default WorkArea