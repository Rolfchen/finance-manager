import PasswordResetRequest from '@/domain/User/Login/PasswordResetRequest';
import { PageContainer } from '../../styles/layout';

const ForgotPassword = () => {
  return (
    <PageContainer>
      <PasswordResetRequest />
    </PageContainer>
  );
};

export default ForgotPassword;
