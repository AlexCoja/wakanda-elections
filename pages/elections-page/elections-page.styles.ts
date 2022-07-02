import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  margin-top: 2%;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100% [col-start]);
  justify-content: center;
  padding: 25px;
`;

const ListTitle = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 2%;
`;

const RadioListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  width: 100%;
  padding: 10px 20px;
`;

const RadioInput = styled.input``;

const InnerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border: 1px solid lightgray;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  margin-left: 20px;
  background-color: aliceblue;

  &&:hover {
    background-color: skyblue;
    cursor: pointer;
    color: #fff;
  }
`;

const CandidateNameAndAge = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const CandidateCult = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

const VoteSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 26%;
`;

const VoteInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 8px;
  color: gray;
  padding: 15px;
  margin-left: 33px;
  margin-bottom: 15px;
`;

const VoteButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: aliceblue;
  border: none;
  border-radius: 8px;
  text-align: center;
  border: 1px solid skyblue;
  color: skyblue;
  margin-left: 33px;

  &&:hover {
    background-color: skyblue;
    cursor: pointer;
    color: #fff;
  }
`;

const ShowLeadsButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: lightyellow;
  border: none;
  border-radius: 8px;
  text-align: center;
  border: 1px solid orange;
  color: orange;
  margin: 15px 0 5% 33px;

  &&:hover {
    background-color: orange;
    cursor: pointer;
    color: #fff;
  }
`;

const TopCandidatesSection = styled.div`
  width: 60%;
  padding: 20px 0 20px 0;
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
  margin-left: 20px;
`;

const TopCandidatesItem = styled.h3`
  color: orange;
`;

const ItemInnerWrapper = styled.div`
  border-bottom: 1px solid orange;
  margin-bottom: 10px;
`;

const ElectionsPageStyled = {
  Root,
  MainTitle,
  ListWrapper,
  ListTitle,
  RadioListWrapper,
  RadioInput,
  InnerListWrapper,
  CandidateNameAndAge,
  CandidateCult,
  VoteSectionWrapper,
  VoteInput,
  VoteButton,
  ShowLeadsButton,
  TopCandidatesSection,
  TopCandidatesItem,
  ItemInnerWrapper,
};

export default ElectionsPageStyled;
