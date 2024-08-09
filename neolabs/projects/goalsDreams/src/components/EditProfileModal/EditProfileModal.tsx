import styled from "styled-components";
import { ChangeEvent, FC, useState } from "react";
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
import headerNotUserImage from "../../assets/header/headerNotUserImage.svg";

import { useProfile } from "../../store/store";

type TProps = {
  open: boolean;
  handleClose: () => void;
};

const StyledSubmitBtn = styled(Button)`
  width: 177px;
  height: 50px;
  border-radius: 10px;
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
`;

const StyledModalHeader = styled(ModalHeader)`
  font-family: var(--monserat);
  font-weight: 600;
  font-size: 24px;
  color: #000;
`;

const StyledImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px;
`;

const EditProfileModal: FC<TProps> = ({ open, handleClose }) => {
  const user = useProfile((state) => state.user);
  const addInfo = useProfile((state) => state.addInfo);

  const [name, setName] = useState(user?.name ? user.name : "");
  const [surname, setSurname] = useState(user?.surname ? user.surname : "");
  const [image, setImage] = useState(user?.image ? user.image : "");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeSurame = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleSubmit = () => {
    addInfo({
      name: name,
      surname: surname,
      image: image,
    });
    handleClose();
  };

  return (
    <>
      <Modal size={"xl"} isOpen={open} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <StyledModalHeader>Edit profile</StyledModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StyledImageDiv>
              <StyledImage src={image ? image : headerNotUserImage} alt="" />
            </StyledImageDiv>
            <StyledInpDiv>
              <input
                placeholder="Image"
                type="text"
                value={image}
                onChange={handleChangeImage}
              />
              <input
                onChange={handleChangeName}
                placeholder="Name"
                type="text"
                value={name}
              />
              <input
                placeholder="Surname"
                type="text"
                onChange={handleChangeSurame}
                value={surname}
              />
            </StyledInpDiv>
          </ModalBody>

          <ModalFooter>
            <StyledSubmitBtn onClick={handleSubmit}>Edit</StyledSubmitBtn>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
