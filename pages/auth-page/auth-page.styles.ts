import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const InfoBanner = styled.div`
  width: 100%;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 15px;
`;

const MainTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

const AuthPageStyled = {
  Root,
  InnerWrapper,
  MainTitle,
  ButtonWrapper,
  InfoBanner,
};

export default AuthPageStyled;
