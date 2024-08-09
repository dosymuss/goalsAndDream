import styled from "styled-components";

import { TProps } from "./SeactionMain";

import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useSections } from "../../store/store";
import SectionMenu from "../../ui/SectionMenu/SectionMenu";

const StyledSectionTop = styled.div`
  background: #f4f4f4;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px 12px;
  & p {
    font-family: var(--monserat);
    font-weight: 500;
    font-size: 16px;
    color: #000;
  }
  & button {
    background: transparent;
    border: none;
    outline: none;
  }
`;

const StyledChangeInp = styled.input`
  height: 40px;
  font-family: var(--monserat);
  font-weight: 500;
  font-size: 16px;
  color: #000;
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
`;

const SeactionTop: FC<TProps> = ({ item }) => {
  const [change, setChange] = useState(false);

  const [inpText, setInpText] = useState(item?.name ? item.name : "");

  const changeName = useSections((state) => state.changeName);

  const inpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (change) {
      inpRef.current?.focus();
    }
  }, [change]);

  const handleSubmitChange = () => {
    changeName(item.id, inpText);
    setChange(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpText(e.target.value);
  };

  useEffect(() => {
    console.log(change);
  }, [change]);

  return (
    <StyledSectionTop>
      {change ? (
        <StyledChangeInp
          onChange={handleChange}
          value={inpText}
          ref={inpRef}
          type="text"
        />
      ) : (
        <p>{item?.name ? item.name : "default"}</p>
      )}
      {change ? (
        <button onClick={handleSubmitChange}>save</button>
      ) : (
        <SectionMenu
          item={item}
          handleChangeNameClick={() => setChange(true)}
        />
      )}
    </StyledSectionTop>
  );
};

export default SeactionTop;
