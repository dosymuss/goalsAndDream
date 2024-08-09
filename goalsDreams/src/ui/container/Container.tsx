import { FC, ReactNode } from "react";
import styled from "styled-components";

type TContainerProps = {
  children: ReactNode;
};

const StyledContainer = styled.div`
  padding: 0 30px;
  height: calc(100vh - 54px);
  width: 100vw;
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;

const Container: FC<TContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
