import styled from "styled-components";

import SeactionTop from "./SeactionTop";
import SeactionBlock from "./SeactionBlock";
import { Section } from "../../store/store";
import { FC, useState } from "react";
import CreateGoalsModal from "../../ui/createGoalsModal/CreateGoalsModal";

const StyledSectionMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 362px;
  @media (max-width: 425px) {
    width: 300px;
  }
`;

const StyledAddBtn = styled.button`
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 362px;
  height: 160px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    font-family: var(--monserat);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`;

export type TProps = {
  item: Section;
};

const SeactionMain: FC<TProps> = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledSectionMain>
      <SeactionTop item={item} />
      {item &&
        item?.sectionItems?.length > 0 &&
        item.sectionItems.map((goals) => (
          <SeactionBlock key={goals.id} id={item.id} item={goals} />
        ))}
      <StyledAddBtn onClick={() => setOpen(true)}>
        <p>+ Add new card</p>
      </StyledAddBtn>
      <CreateGoalsModal
        id={item.id}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </StyledSectionMain>
  );
};

export default SeactionMain;
