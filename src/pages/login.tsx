import { css } from '@emotion/react';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import { Button, TextField } from '@mui/material';

import { PageContainer } from '../styles/layout';

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
    'submit submit';

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
  width: 100%;
`;

const Login: NextPage = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <h1>Personal Finance Manager</h1>
        <h2>Login</h2>
        <TextField
          variant="outlined"
          label="Username"
          css={usernameFieldStyle}
        />
        <TextField
          variant="outlined"
          label="Password"
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
