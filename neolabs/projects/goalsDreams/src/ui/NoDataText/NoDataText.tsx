import styled from "styled-components";

const StyledMain = styled.div`
  height: calc(100vh - 214px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: var(--inria);
`;

const StyledHaText = styled.div`
  font-size: 60px;
`;


const NoDataText = () => {
  return (
    <StyledMain>
      <StyledHaText>
        <p>HAHAHAHAHA</p>
        <p>HAHAHAHAHA</p>
        <p>AHAHAHAHAH</p>
      </StyledHaText>
      <p>Sorry, no data :(</p>
    </StyledMain>
  );
};

export default NoDataText;
