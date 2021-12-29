import styled from '@emotion/styled';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { signOutUser } from '@/utils';
import { useUserState } from '@/context/UserContext';
import { useRouter } from 'next/router';

const NavBarContainer = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const LogoContainer = styled.div``;

const MenuContainer = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & button {
    border: none;
    background-color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;

export interface NavBarProps {
  logo?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  height?: number;
}

/**
 * The main menu bar appearing at the top of the page.
 */
const NavBar = ({ logo, title, children }: NavBarProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { user } = useUserState();

  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const isSignedOut = await signOutUser();
    if (isSignedOut) {
      router.push('/login');
    }
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        {logo}
        {title && <h3>{title}</h3>}
      </LogoContainer>
      <MenuContainer>{children}</MenuContainer>
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
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </ProfileContainer>
    </NavBarContainer>
  );
};

export default NavBar;
