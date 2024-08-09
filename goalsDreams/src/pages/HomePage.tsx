import styled from "styled-components";
import Header from "../components/Header/Header";
import Container from "../ui/container/Container";
import SeactionMain from "../components/Seaction/SeactionMain";
import { useSections } from "../store/store";
import NoDataText from "../ui/NoDataText/NoDataText";

const StyledTitle = styled.h2`
  font-family: var(--monserat);
  font-weight: 500;
  font-size: 20px;
  color: #000;
  padding-top: 30px;
  margin-bottom: 15px;
  overflow: hidden;

`;

const StyledSections = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  overflow-y: visible;
  overflow-x: auto;
  height: 100%;
  padding-bottom: 100px;
  padding-right: 100px;

  & > div {
    flex-shrink: 0;
  }
`;

const HomePage = () => {
  const sections = useSections((state) => state.sections);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Container>
        <StyledTitle>Dreams / Goals</StyledTitle>
        {sections && sections.length > 0 ? (
          <StyledSections>
            {sections.map((item) => (
              <SeactionMain key={item.id} item={item} />
            ))}
          </StyledSections>
        ) : (
          <NoDataText />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
