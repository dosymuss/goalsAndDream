import { useState } from "react";
import styled from "styled-components";

import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";

import headerNotUser from "../../assets/header/headerNotUserImage.svg";
import { useProfile } from "../../store/store";

const StyledHedaerProfileBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const HeaderProfileImage = () => {
  const [open, setOpen] = useState(false);

  const user = useProfile((state) => state.user);

  return (
    <div>
      <StyledHedaerProfileBtn onClick={() => setOpen(true)}>
        <img src={user?.image ? user.image : headerNotUser} alt="" />
      </StyledHedaerProfileBtn>
      <EditProfileModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default HeaderProfileImage;
