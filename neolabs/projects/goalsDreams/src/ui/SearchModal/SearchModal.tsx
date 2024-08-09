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
import { FC } from "react";
import styled from "styled-components";
import { useSections } from "../../store/store";
import SeactionMain from "../../components/Seaction/SeactionMain";
import NoDataText from "../NoDataText/NoDataText";

type SearchModalProps = {
  open: boolean;
  handleClose: () => void;
};

const StyledHeaderTitle = styled.p`
  padding: 9px 15px;
  font-family: var(--josefin);
  font-weight: 700;
  font-size: 25px;
  color: #000;
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

const StyledMain = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: var(--inria);
`;

const StyledHaText = styled.div`
  font-size: 60px;
`;

const SearchModal: FC<SearchModalProps> = ({ open, handleClose }) => {
  const searchSections = useSections((state) => state.searchSections);

  return (
    <Modal size={"full"} isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <StyledHeaderTitle>Goals and dreams</StyledHeaderTitle>
        <ModalCloseButton />
        <ModalBody>
          {searchSections && searchSections.length > 0 ? (
            <StyledSections>
              {searchSections.map((item) => (
                <SeactionMain key={item.id} item={item} />
              ))}
            </StyledSections>
          ) : (
            <StyledMain>
              <StyledHaText>
                <p>HAHAHAHAHA</p>
                <p>HAHAHAHAHA</p>
                <p>AHAHAHAHAH</p>
              </StyledHaText>
              <p>Sorry, no data :(</p>
            </StyledMain>
          )}
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleClose} color={"white"} bgColor={"#319795"}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
