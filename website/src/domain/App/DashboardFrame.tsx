import { DashboardNavBar, signOutUser } from 'de-fend';
import ProtectedContentWrapper, {
  LoginMethod,
} from '@/components/ProtectedContentWrapper';
import { PageContainer } from '@/styles/layout';

interface DashboardFrameProps {
  isProtected?: boolean;
  loginMethod?: LoginMethod;
  children?: React.ReactNode;
}

const DashboardFrame = ({
  children,
  isProtected = true,
  loginMethod = 'redirect',
}: DashboardFrameProps) => {
  const FrameContainer = isProtected ? ProtectedContentWrapper : 'div';
  return (
    <FrameContainer loginMethod={loginMethod}>
      <DashboardNavBar title="Finance Manager" />
      <PageContainer as="main">{children}</PageContainer>
    </FrameContainer>
  );
};

export default DashboardFrame;
