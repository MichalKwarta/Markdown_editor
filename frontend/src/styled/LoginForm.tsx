import { FormEvent } from "react";
import StyledButton from "./Button";
import FlexStyled from "./Flex";
import StyledInput from "./Input";

function LoginForm() {
  const handleSubmit = (e:FormEvent) => { 
e.preventDefault()

  }
  return (

    <FlexStyled direction="column">
    <form onSubmit={handleSubmit} >
      <StyledInput myplaceholder="Email" id="Email" type="text"></StyledInput>
      <StyledInput
        myplaceholder="Password"
        id="Password"
        type="password"
      ></StyledInput>
      <StyledButton>Login</StyledButton>

      
    </form>
    <span style={{marginTop:"1rem"}}>No account? Register</span>
    </FlexStyled>
  );
}

export default LoginForm;
