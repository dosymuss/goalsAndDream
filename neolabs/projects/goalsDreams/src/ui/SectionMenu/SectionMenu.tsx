import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import threePointIcon from "../../assets/section/threePoinIcon.svg";
import { FC, useState } from "react";
import { TProps } from "../../components/Seaction/SeactionMain";
import { useSections } from "../../store/store";
import CreateGoalsModal from "../createGoalsModal/CreateGoalsModal";

type TSectionMenuProps = {
  handleChangeNameClick: () => void;
} & TProps;

const SectionMenu: FC<TSectionMenuProps> = ({
  handleChangeNameClick,
  item,
}) => {
  const [open, setOpen] = useState(false);
  const deleteSection = useSections((state) => state.deleteSection);
  return (
    <>
      <Menu>
        <MenuButton as={Button}>
          <img src={threePointIcon} alt="" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setOpen(true)}>Add Goals</MenuItem>
          <MenuItem onClick={() => deleteSection(item.id)}>Delete</MenuItem>
          <MenuItem onClick={handleChangeNameClick}>Change Name</MenuItem>
        </MenuList>
      </Menu>
      <CreateGoalsModal
        id={item.id}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default SectionMenu;
