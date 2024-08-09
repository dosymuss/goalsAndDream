import styled from "styled-components";

import HeaderSearchInp from "../../ui/HeaderSearchInp/HeaderSearchInp";
import HeaderProfileImage from "../../ui/HeaderProfile/HeaderProfileImage";
import HeaderAddSectionBtn from "../../ui/HeaderAddSection/HeaderAddSectionBtn";

const StyledHeaderTitle = styled.p`
  font-family: var(--josefin);
  font-weight: 700;
  font-size: 25px;
  color: #000;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const StyledHeader = styled.header`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #979797;

  & div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <StyledHeaderTitle>Goals and dreams</StyledHeaderTitle>
        <HeaderSearchInp />
      </div>
      <div>
        <HeaderAddSectionBtn />
        <HeaderProfileImage />
      </div>
    </StyledHeader>
  );
};

export default Header;
