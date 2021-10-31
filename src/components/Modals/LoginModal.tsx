/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Button,
  TextField,
  Alert,
  Collapse,
  AlertColor,
  Dialog,
} from '@mui/material';
import { PageContainer } from '../../styles/layout';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FirebaseError } from '@firebase/util';
import {
  useModalState,
  useModalStateUpdater,
} from '../../context/AppModalContext';

interface LoginModalProps {
  onClose?: () => void;
}

const LoginContainer = styled(PageContainer)`
  margin: 0px;
`;

const LoginForm = styled.form`
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

const submitStyle = css`
  min-height: 56px;
`;

const LoginModal = ({ onClose }: LoginModalProps) => {
  const { isOpen = false } = useModalState('loginModal');
  const { toggleModal } = useModalStateUpdater();
  // TODO: add setShowPassword icon
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<AlertColor>('success');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      if (userCredentials) {
        console.log('Logged In');
        setFormMessage('');
        toggleModal('loginModal', false);
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
        console.log('Unknown Error Encountered');
        setFormMessage('Unkonwn Error Encountered');
      }
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Dialog open={isOpen}>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Personal Finance Manager</h1>
        <h3>Login with your username and password</h3>
        <TextField
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
        <Button variant="contained" type="submit" css={submitStyle}>
          Login
        </Button>
      </LoginForm>
    </Dialog>
  );
};

export default LoginModal;
