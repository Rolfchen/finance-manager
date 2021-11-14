/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Button,
  TextField,
  Alert,
  Collapse,
  AlertColor,
  CircularProgress,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FirebaseError } from '@firebase/util';
import Link from 'next/link';
import { Logger, Routing } from '@/utils';
import { UserFormButton, UserFormContainer } from './styled';

interface LoginFormProps {
  onSuccess?: () => void;
}

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  // TODO: add setShowPassword icon
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<AlertColor>('success');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage('');
    const auth = getAuth();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      if (userCredentials) {
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      setFormStatus('error');
      if (error instanceof FirebaseError) {
        Logger.error('Firebase Error encountered', {
          code: error.code,
          message: error.message,
        });
        setFormMessage(error.message);
      } else {
        setFormMessage('Unknown Error Encountered');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
      <h1>Personal Finance Manager</h1>
      <h3>Login with your username and password</h3>
      <TextField
        type="email"
        onChange={handleUsernameChange}
        variant="outlined"
        label="Username"
        placeholder="my.name@gmail.com"
      />
      <TextField
        onChange={handlePasswordChange}
        variant="outlined"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="*********"
      />

      <Collapse in={!!formMessage}>
        <Alert severity={formStatus}>{formMessage}</Alert>
      </Collapse>
      <ForgotPasswordContainer>
        <Link href={Routing.getNamedRoute('forgotPassword')}>
          Forgot your password?
        </Link>
      </ForgotPasswordContainer>
      <UserFormButton variant="contained" type="submit">
        {isLoading ? (
          <>
            <CircularProgress color="secondary" />
            <span>Logging in...</span>
          </>
        ) : (
          'Login'
        )}
      </UserFormButton>
    </UserFormContainer>
  );
};

export default LoginForm;
