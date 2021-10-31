/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Alert } from '@mui/material';
import { PageContainer } from '../styles/layout';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FirebaseError } from '@firebase/util';

const LoginContainer = styled(PageContainer)`
  margin: 0px;
`;

const LoginForm = styled.form`
  max-width: 800px;
  margin: auto;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[400]}`};
  padding: ${({ theme }) => theme.spacing(4)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-areas:
    'title title'
    'heading heading'
    'username password'
    '. submit';

  & h1 {
    grid-area: title;
    margin: 0px;
  }
  & h2 {
    grid-area: heading;
    margin: 0px;
  }
`;

const usernameFieldStyle = css`
  grid-area: username;
`;

const passwordFieldStyle = css`
  grid-area: password;
`;

const submitStyle = css`
  grid-area: submit;
  min-height: 56px;
`;

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

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
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log('Firebase Error encountered', {
          code: error.code,
          message: error.message,
        });
      }
      console.log('Unknown Error Encountered');
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Personal Finance Manager</h1>
        <h2>Login</h2>
        <TextField
          onChange={handleUsernameChange}
          variant="outlined"
          label="Username"
          placeholder="john@gmail.com"
          css={usernameFieldStyle}
        />
        <TextField
          onChange={handlePasswordChange}
          variant="outlined"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="*********"
          css={passwordFieldStyle}
        />
        <Button variant="contained" type="submit" css={submitStyle}>
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
