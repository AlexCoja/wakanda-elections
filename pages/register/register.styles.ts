import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 8px;
  text-align: center;
  margin-left: 35px;
`;

const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: aliceblue;
  border: none;
  border-radius: 8px;
  text-align: center;
  border: 1px solid skyblue;
  color: skyblue;
  margin-left: 33px;
  margin-top: 15px;

  &&:hover {
    background-color: skyblue;
    cursor: pointer;
    color: #fff;
  }
`;

const RegisterStyled = { Root, Input, RegisterButton };

export default RegisterStyled;
