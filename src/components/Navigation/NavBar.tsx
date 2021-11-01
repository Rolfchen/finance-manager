import styled from '@emotion/styled';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useUserState } from '../../context/UserContext';

import { signOutUser } from '../../utils';

const NavBarContainer = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const LogoContainer = styled.div``;

const MenuList = styled.ul``;

const ProfileContainer = styled.div`
  & button {
    border: none;
    background-color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { user } = useUserState();

  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavBarContainer>
      <LogoContainer />
      <MenuList />
      <ProfileContainer>
        <Avatar
          component="button"
          src={user?.photoURL || undefined}
          onClick={handleProfileClick}
          aria-controls="profile-menu"
        >
          {user?.displayName?.charAt(0)}
        </Avatar>
        <Menu
          id="profile-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            'aria-label': 'Profile Menu',
          }}
        >
          <MenuItem>My Account</MenuItem>
          <MenuItem onClick={signOutUser}>Logout</MenuItem>
        </Menu>
      </ProfileContainer>
    </NavBarContainer>
  );
};

export default NavBar;
