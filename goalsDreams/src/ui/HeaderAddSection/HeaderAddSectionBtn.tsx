import styled from "styled-components";

import headerPlusIcon from "../../assets/header/headerPlusIcon.svg";
import { useSections } from "../../store/store";

const StyledAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
`;

const HeaderAddSectionBtn = () => {
  const addSection = useSections((state) => state.addSection);
  return (
    <>
      <StyledAddBtn onClick={addSection}>
        <img src={headerPlusIcon} alt="" />
      </StyledAddBtn>
    </>
  );
};

export default HeaderAddSectionBtn;
