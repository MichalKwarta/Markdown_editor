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
  @media print{
    body{
      background-color: white;

      
  }
  *{
    border:none !important;
  }
  .markdown {
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color: white;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
    color:black;
    border:none;
    &>*{
      padding:0.2rem;
    }

  }
  

}
`
export default GlobalStyle
