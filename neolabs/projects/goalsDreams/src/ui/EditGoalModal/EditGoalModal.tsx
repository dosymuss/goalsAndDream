import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FC, useState } from "react";

import ColorPreoritetSelect from "../ColorPreoritetSelect/ColorPreoritetSelect";
import { SectionItem, useSections } from "../../store/store";

const StyledSubmitBtn = styled.button`
  width: 177px;
  height: 40px;
  border-radius: 5px;
  background: #3182ce;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--monserat);
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  border: none;

  &:hover {
    background: #2b6cb0;
  }

  &[disabled] {
    background: #a3a7aa;
    cursor: not-allowed; /* Добавим этот стиль для указания отключенной кнопки */
  }
`;

const StyledInpDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & input {
    height: 50px;
    border-radius: 10px;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--monserat);
    font-weight: 500;
    font-size: 16px;
    color: #000;
    border: 1px solid #979797;
    padding-left: 10px;
    outline: none;

    &:focus {
      border-color: #319795;
      box-shadow: 0 0 0 1px #319795;
    }
  }

  & textarea {
    height: 180px;
    border-radius: 10px;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--monserat);
    font-weight: 500;
    font-size: 16px;
    color: #000;
    border: 1px solid #979797;
    padding: 10px 10px;
    outline: none;
    resize: none;

    &:focus {
      border-color: #319795;
      box-shadow: 0 0 0 1px #319795;
    }
  }
`;

const StyledModalHeader = styled(ModalHeader)`
  font-family: var(--monserat);
  font-weight: 600;
  font-size: 24px;
  color: #000;
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

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

type TCreateGoalsModalProps = {
  open: boolean;
  handleClose: () => void;
  id: string;
  item: SectionItem;
};

const EditGoalModal: FC<TCreateGoalsModalProps> = ({
  open,
  handleClose,
  id,
  item,
}) => {
  const [mainColor, setMainColor] = useState(item.color);
  const [image, setImage] = useState(item?.image ? item.image : "");
  const [goal, setGoal] = useState(item.text);
  const [title, setTitle] = useState(item.title);

  const editGoal = useSections((state) => state.editGoal);

  const handleCreate = () => {
    if (Boolean(goal)) {
      editGoal(id, {
        id: item.id,
        text: goal,
        is_liked: false,
        color: mainColor,
        image: image,
        title: title,
      });
    }
    handleClose();
  };

  return (
    <Modal size={"xl"} isOpen={open} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <StyledModalHeader>Edit profile</StyledModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {image ? (
            <StyledImageDiv>
              <StyledImage src={image} alt="" />
            </StyledImageDiv>
          ) : (
            <></>
          )}
          <StyledInpDiv>
            <input
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image"
              type="text"
              value={image}
            />
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
            />
            <textarea
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Goals"
              value={goal}
            ></textarea>
          </StyledInpDiv>
          <ColorPreoritetSelect setMainColor={setMainColor} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleClose}>
            Close
          </Button>
          <StyledSubmitBtn disabled={goal.length === 0} onClick={handleCreate}>
            Edit
          </StyledSubmitBtn>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditGoalModal;
