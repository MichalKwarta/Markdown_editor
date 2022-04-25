import React from 'react'
import FlexStyled from '../styled/Flex'
import FlexCard from '../styled/FlexCard'
import Grid from '../styled/Grid'
import GridChild from '../styled/GridChild'
import StyledInput from '../styled/Input'
import { ReactComponent as LoginImage } from '../resources/login.svg'
import LoginForm from '../styled/LoginForm'

function Login() {
  return (
      <FlexStyled
          direction="column"
          justify="center"
          align="center"
          height="100%"
          wrap="nowrap"
          
      >

          <FlexCard width="clamp(20rem, 50vw, 300rem);" height="clamp(50vh,70vh,100vh)">
              <Grid
                  templatecolumns='repeat(2, minmax(0, 1fr));'
                  templaterows='1fr'
                  columngap='1rem'
              >

                  <GridChild rowstart={1} rowend={2} columnstart={1} columnend={2} justifyself="center" alignself="start" >
                      <h1 style={{marginBottom:"1rem"}}>Login Friend!</h1>
                        <LoginForm/>

                  </GridChild>

                  <GridChild rowstart={1} rowend={2} columnstart={2} columnend={3} >
                      
                      <LoginImage width="100%" />

                  </GridChild>

              </Grid>
              
         </FlexCard>

    </FlexStyled>
  )
}

export default Login