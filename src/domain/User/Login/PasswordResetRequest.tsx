import { ChangeEvent, FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Collapse,
  AlertColor,
  Alert,
} from '@mui/material';
import { FirebaseError } from '@firebase/util';

const PasswordResetContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  gap: ${({ theme }) => theme.spacing(2)};
  & button {
    min-height: 56px;
  }
`;

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<AlertColor>('info');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormMessage('');
    setIsLoading(true);
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setFormMessage('Your password reset email has been sent');
      setFormStatus('success');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFormMessage(error.message);
        setFormStatus('error');
      } else {
        setFormMessage('An error has occurred');
        setFormStatus('error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PasswordResetContainer onSubmit={handleSubmit}>
      <h1>Send password reset email</h1>
      <Typography variant="subtitle1">
        Enter your email (username) below to receive password reset email
      </Typography>
      <TextField
        variant="outlined"
        label="Username"
        type="email"
        placeholder="my.name@gmail.com"
        value={email}
        onChange={handleChange}
      />
      <Collapse in={!!formMessage}>
        <Alert severity={formStatus}>{formMessage}</Alert>
      </Collapse>
      {formStatus === 'success' && <Link href="/login">Back to login</Link>}
      <Button variant="contained" type="submit">
        {isLoading ? (
          <>
            <CircularProgress color="secondary" />
          </>
        ) : (
          'Send password reset email'
        )}
      </Button>
    </PasswordResetContainer>
  );
};

export default PasswordResetRequest;
