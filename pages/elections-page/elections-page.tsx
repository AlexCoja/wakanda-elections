import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

/* Blockchain */
import wakandaToken from "../../blockchain/wakanda-token";

/* Hooks */
import useWakandaCandidates from "./hooks/use-wakanda-candidates";
import { useContractHook } from "../../src/common/hooks/use-contract";
import { useWalletConnectHook } from "../../src/common/hooks";

/* Stlyes */
import ElectionsPageStyled from "./elections-page.styles";
import { Contracts } from "../../src/common/constants/contract";
import { sendToken } from "../../src/common/utils";
import wakandaElctionsContract from "../../blockchain/wakanda-elections";

export default function ElectionsPage() {
  const [getWakandaCandidates, { data: candidatesList }] =
    useWakandaCandidates();

  const { vote } = useContractHook();

  const { account } = useWalletConnectHook();

  const router = useRouter();

  const [selectedCandidate, setSelectedCandidate] = useState(100);
  const [enteredWKND, setEnteredWKND] = useState(0);
  const [name, setName] = useState("");
  const [currentTop3Candidates, setCurrentTop3Candidates] = useState(
    [] || null
  );

  const onCandidateClickHandler = (value: number, name: string) => () => {
    setSelectedCandidate(value);
    setName(name);
  };

  const onWKNDEntryHandler = (e: any) => {
    let WKND = e.target.value;

    if (WKND !== 0) {
      setEnteredWKND(WKND);
    }
  };

  const onVoteBtnClicked = async () => {
    if (enteredWKND !== 0 && selectedCandidate !== 100) {
      const balanceOfCurrentAddress = await wakandaToken.methods
        .balanceOf(account)
        .call();

      if (balanceOfCurrentAddress < 1) {
        toast.error("insufficient funds to cast a vote!");
        setTimeout(() => {
          router.push("/register");
        }, 1500);
      } else {
        let isVoted = await vote(selectedCandidate);
        if (isVoted) {
          //entered No of WKND is sent on voting action
          await sendToken(account, enteredWKND);
        }
      }
    } else {
      toast.error(
        enteredWKND === 0
          ? "Please enter WKND amount to continue!"
          : "Please choose candidate for whom you want to vote!"
      );
    }
  };

  const onShowLeadsClickHanlder = async () => {
    const candidates = await wakandaElctionsContract.methods
      .winningCandidates()
      .call();

    setCurrentTop3Candidates(candidates);
  };

  const onHideListClickHanlder = () => {
    setCurrentTop3Candidates([]);
  };

  useEffect(() => {
    getWakandaCandidates();
  }, []);

  return (
    <ElectionsPageStyled.Root>
      <ElectionsPageStyled.MainTitle>
        Welcome to Wakanda Elections!!
      </ElectionsPageStyled.MainTitle>
      <ElectionsPageStyled.ListTitle>
        Candidates List
      </ElectionsPageStyled.ListTitle>
      <ElectionsPageStyled.ListWrapper>
        {candidatesList?.candidates.map((item, index) => {
          return (
            <ElectionsPageStyled.RadioListWrapper key={Math.random()}>
              <ElectionsPageStyled.RadioInput
                key={item.age}
                id={item.age.toString()}
                value={item.name}
                readOnly
                type="radio"
                checked={item.name === name}
              />
              <ElectionsPageStyled.InnerListWrapper
                onClick={onCandidateClickHandler(index + 3, item.name)}
              >
                <ElectionsPageStyled.CandidateNameAndAge key={Math.random()}>
                  {item.name}, {item.age}
                </ElectionsPageStyled.CandidateNameAndAge>
                <ElectionsPageStyled.CandidateCult key={Math.random()}>
                  {item.cult}
                </ElectionsPageStyled.CandidateCult>
              </ElectionsPageStyled.InnerListWrapper>
            </ElectionsPageStyled.RadioListWrapper>
          );
        })}
      </ElectionsPageStyled.ListWrapper>
      {currentTop3Candidates.length ? (
        <ElectionsPageStyled.TopCandidatesSection>
          {currentTop3Candidates.slice(0, 3).map((item: any, index) => {
            return (
              <ElectionsPageStyled.ItemInnerWrapper key={Math.random()}>
                <ElectionsPageStyled.TopCandidatesItem>
                  {item === "" ? "" : `${index + 1}. Elected: ${item.name}`}
                </ElectionsPageStyled.TopCandidatesItem>
                <ElectionsPageStyled.TopCandidatesItem>
                  {item === "" ? "" : `Number of Votes: ${item.voteCount}`}
                </ElectionsPageStyled.TopCandidatesItem>
              </ElectionsPageStyled.ItemInnerWrapper>
            );
          })}
        </ElectionsPageStyled.TopCandidatesSection>
      ) : null}
      <ElectionsPageStyled.VoteSectionWrapper>
        <ElectionsPageStyled.VoteInput
          onChange={onWKNDEntryHandler}
          type="number"
          placeholder="Please enter desired WKND amount to cast a vote"
        />
        <ElectionsPageStyled.VoteButton onClick={onVoteBtnClicked}>
          VOTE
        </ElectionsPageStyled.VoteButton>
        {currentTop3Candidates.length ? (
          <ElectionsPageStyled.ShowLeadsButton onClick={onHideListClickHanlder}>
            Hide List
          </ElectionsPageStyled.ShowLeadsButton>
        ) : (
          <ElectionsPageStyled.ShowLeadsButton
            onClick={onShowLeadsClickHanlder}
          >
            Show Leads
          </ElectionsPageStyled.ShowLeadsButton>
        )}
      </ElectionsPageStyled.VoteSectionWrapper>
    </ElectionsPageStyled.Root>
  );
}
