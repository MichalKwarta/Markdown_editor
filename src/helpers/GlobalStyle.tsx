import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps { 
  color: string,
  bg:string
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    color: ${props => (props.color||"white")};
    background-color: ${props => (props.bg || "black")};
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow:hidden;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  *,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html,body{
    height:100%;
    width:100%;
  }
  
`
export default GlobalStyle
