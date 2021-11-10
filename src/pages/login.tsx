import { useRouter } from 'next/router';
import LoginForm from '../components/Login/LoginForm';
import { PageContainer } from '../styles/layout';

const Login = () => {
  const router = useRouter();
  const handleSuccess = () => {
    router.push('/');
  };
  return (
    <PageContainer>
      <LoginForm onSuccess={handleSuccess} />
    </PageContainer>
  );
};

export default Login;
