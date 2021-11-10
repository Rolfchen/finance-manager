/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginContainer = styled.form`
  max-width: 800px;
  margin: auto;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[400]}`};
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  & h1,
  h2,
  h3 {
    margin: 0px;
  }
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const submitStyle = css`
  min-height: 56px;
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
        console.log('Firebase Error encountered', {
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
    <LoginContainer onSubmit={handleSubmit}>
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
        <Link href="/forgot-password">Forgot your password?</Link>
      </ForgotPasswordContainer>
      <Button variant="contained" type="submit" css={submitStyle}>
        {isLoading ? (
          <>
            <CircularProgress color="secondary" />
            <span>Logging in...</span>
          </>
        ) : (
          'Login'
        )}
      </Button>
    </LoginContainer>
  );
};

export default LoginForm;
