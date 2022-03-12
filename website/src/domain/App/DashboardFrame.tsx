import { DashboardNavBar, signOutUser } from 'de-fend';
import ProtectedContentWrapper, {
  LoginMethod,
} from '@/components/ProtectedContentWrapper';
import { PageContainer } from '@/styles/layout';
import { MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface DashboardFrameProps {
  isProtected?: boolean;
  loginMethod?: LoginMethod;
  children?: React.ReactNode;
}

/**
 * Dashboard's layout
 */
const DashboardFrame = ({
  children,
  isProtected = true,
  loginMethod = 'redirect',
}: DashboardFrameProps) => {
  const FrameContainer = isProtected ? ProtectedContentWrapper : 'div';

  const router = useRouter();

  const handleLogout = useCallback(async () => {
    const isSignedOut = await signOutUser();
    if (isSignedOut && router) {
      // go to the login page after logout
      router.push('/login');
    }
  }, [router]);

  return (
    <FrameContainer loginMethod={loginMethod}>
      <DashboardNavBar
        title="Finance Manager"
        profileMenuItems={
          <>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        }
      />
      <PageContainer as="main">{children}</PageContainer>
    </FrameContainer>
  );
};

export default DashboardFrame;
