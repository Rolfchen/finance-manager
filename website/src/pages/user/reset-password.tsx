import PasswordResetForm from '@/domain/User/Login/PasswordResetForm';
import { PageContainer } from '@/styles/layout';

const ResetPassword = () => {
  return (
    <PageContainer>
      <PasswordResetForm />
    </PageContainer>
  );
};

export default ResetPassword;
