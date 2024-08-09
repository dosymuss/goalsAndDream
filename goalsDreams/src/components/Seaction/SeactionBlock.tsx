import styled from "styled-components";
import { FC, useState } from "react";

import likeIcon from "../../assets/section/likeIcon.svg";
import likeAccIcon from "../../assets/section/likeAcc.svg";
import { SectionItem, useSections } from "../../store/store";
import editIcon from "../../assets/section/editSection.svg";
import EditGoalModal from "../../ui/EditGoalModal/EditGoalModal";

const StyledSectionBlock = styled.div`
  background: #f4f4f4;
  border-radius: 10px;
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
  align-items: flex-start;
  & div {
    & p {
      font-family: var(--monserat);
      font-weight: 400;
      font-size: 16px;
      color: #000;
      margin-top: 9px;
    }
    & h4 {
      font-family: var(--monserat);
      font-weight: 600;
      font-size: 18px;
      color: #000;
      margin-top: 9px;
    }
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & button {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    justify-self: flex-end;
  }
`;

const StyledPreoritetColor = styled.span`
  display: block;
  width: 60px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  object-fit: cover;
  object-position: center;
  transition: 1s;

  &:hover {
    height: 350px;
  }
`;

type TSeactionBlockProps = {
  id: string;
  item: SectionItem;
};

const SeactionBlock: FC<TSeactionBlockProps> = ({ id, item }) => {
  const [open, setOpen] = useState(false);

  const likeGoal = useSections((state) => state.likeGoal);

  const handleLIke = () => {
    likeGoal(id, item.id);
  };

  return (
    <>
      <StyledSectionBlock>
        {item?.image && <StyledImage src={item.image} alt="" />}
        <div>
          <StyledPreoritetColor color={item.color} />
          {item && item?.title && <h4>{item.title}</h4>}
          <p>{item.text}</p>
        </div>
        <StyledButtonDiv>
          <button onClick={handleLIke}>
            <img src={item.is_liked ? likeAccIcon : likeIcon} alt="" />
          </button>

          <button onClick={() => setOpen(true)}>
            <img src={editIcon} alt="" />
          </button>
        </StyledButtonDiv>
      </StyledSectionBlock>
      <EditGoalModal
        item={item}
        id={id}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default SeactionBlock;
