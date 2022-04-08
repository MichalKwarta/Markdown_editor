import { createGlobalStyle } from 'styled-components'
import { themeProps} from "./theme"


const GlobalStyle = createGlobalStyle<themeProps>`
  body {
    color: ${props => (props.color||"white")};
    background-color: ${props => (props.bg || "black")};
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  }
  *,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html,body,#root{
    height:100%;
    width:100%;
  }

  blockquote{
    font-style:italic;
    border:1px solid ${props => props.color|| "white"};
    border-left:0.5rem solid ${props => props.color|| "white"};;
    padding-left:0.5rem;
    background-color:${props => props.bg|| "white"};
  }
  @media print{
 
  .markdown {
    border:none !important;

    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    padding:10px;
    color:black;
    border:none;
  

  }

  

}
`
export default GlobalStyle
