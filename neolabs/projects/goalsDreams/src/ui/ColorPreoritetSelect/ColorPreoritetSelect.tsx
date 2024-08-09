import styled from "styled-components";

import arrTop from "../../assets/section/arrTop.svg";
import arrDown from "../../assets/section/arrDown.svg";
import { FC, useState } from "react";

const priorityColors = {
  high: "#ff6961", // Красный цвет для высокого приоритета
  medium: "#ffb347", // Оранжевый цвет для среднего приоритета
  low: "#77dd77", // Зеленый цвет для низкого приоритета
  love: "#F893F4",
  future: "#1DA7F5",
};

const StyledMain = styled.div`
  margin-top: 20px;
  position: relative;
`;

const StyledBtn = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-family: var(--monserat);
  font-weight: 500;
  font-size: 16px;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledColorBtns = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  overflow: hidden;
  max-height: ${(props) => (props.active ? "500px" : "0")};
  transition: max-height 0.3s ease-in-out;
`;

const StyledColorBtn = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-family: var(--monserat);
  font-weight: 500;
  font-size: 16px;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

type TProps = {
  setMainColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorPreoritetSelect: FC<TProps> = ({ setMainColor }) => {
  const [color, setColor] = useState("#979797");
  const [open, setOpen] = useState(false);

  const handleClickColor = (color: string) => {
    setOpen(false);
    setColor(color);
    setMainColor(color);
  };

  return (
    <StyledMain>
      <StyledBtn onClick={() => setOpen(!open)} color={color}>
        Color prioritet
        <img src={open ? arrDown : arrTop} alt="" />
      </StyledBtn>
      <StyledColorBtns active={open}>
        <StyledColorBtn
          color={priorityColors.high}
          onClick={() => handleClickColor(priorityColors.high)}
        >
          Капец важно
        </StyledColorBtn>
        <StyledColorBtn
          color={priorityColors.medium}
          onClick={() => handleClickColor(priorityColors.medium)}
        >
          Важно
        </StyledColorBtn>
        <StyledColorBtn
          color={priorityColors.low}
          onClick={() => handleClickColor(priorityColors.low)}
        >
          Не очень важно, но нужно
        </StyledColorBtn>
        <StyledColorBtn
          color={priorityColors.love}
          onClick={() => handleClickColor(priorityColors.love)}
        >
          Ради моей любви
        </StyledColorBtn>
        <StyledColorBtn
          color={priorityColors.future}
          onClick={() => handleClickColor(priorityColors.future)}
        >
          Мечты на будущее
        </StyledColorBtn>
      </StyledColorBtns>
    </StyledMain>
  );
};

export default ColorPreoritetSelect;
