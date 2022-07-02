import { useState } from "react";

/* Utils */
import { receiveToken } from "../../src/common/utils";

/* Styles */
import RegisterStyled from "./register.styles";

function Register() {
  const [enteredAddress, setEnteredAddress] = useState("");

  const onRegisterClickHandler = async () => {
    if (enteredAddress) {
      await receiveToken(enteredAddress);
    }
  };

  const onValueChange = (event: any) => {
    const currentValue = event.target.value;

    if (currentValue) {
      setEnteredAddress(currentValue);
    }
  };

  return (
    <RegisterStyled.Root>
      <RegisterStyled.Input
        placeholder="Enter your Ether address"
        onChange={onValueChange}
      />
      <RegisterStyled.RegisterButton onClick={onRegisterClickHandler}>
        Register HERE
      </RegisterStyled.RegisterButton>
    </RegisterStyled.Root>
  );
}

export default Register;
