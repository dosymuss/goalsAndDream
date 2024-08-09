import styled from "styled-components";
import { useState } from "react";

import searchIcon from "../../assets/header/searchIcon.svg";
import SearchModal from "../SearchModal/SearchModal";
import { useSections } from "../../store/store";

const StyledInp = styled.div`
  background: #f4f4f4;
  border-radius: 25px;
  width: 512px;
  height: 30px;
  padding: 7px 14px 7px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 1s;

  @media (max-width: 900px) {
    width: auto;
  }
  @media (max-width: 650px) {
    width: 0;
    opacity: 0;
  }

  & input {
    width: 100%;
    height: 20px;
    background: transparent;
    outline: none;
    border: none;
  }

  & button {
    background: transparent;
    outline: none;
    border: none;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const HeaderSearchInp = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const searchGoal = useSections((state) => state.searchGoal);

  const handleSubmit = () => {
    searchGoal(value);
    setOpen(true);
  };

  return (
    <>
      <StyledInp>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search"
          type="text"
        />
        <button disabled={!value} onClick={handleSubmit}>
          <img src={searchIcon} alt="" />
        </button>
      </StyledInp>
      <SearchModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default HeaderSearchInp;
