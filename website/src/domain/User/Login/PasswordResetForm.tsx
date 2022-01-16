import React, { FormEvent, useCallback, useState } from 'react';
import { AlertColor, Collapse, TextField } from '@mui/material';
import { UserFormButton, UserFormContainer } from './styled';
import {
  confirmPasswordReset,
  getAuth,
  verifyPasswordResetCode,
} from '@firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Alert } from '@/components';
import { Logger, Routing } from '@/utils/frontend';

/**
 * This is the actual form that changes the user's password
 * from a valid password reset code
 */
const PasswordResetForm = () => {
  // TODO: confirm password validation
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<React.ReactNode>('');
  const [formStatus, setFormStatus] = useState<AlertColor>('info');
  const router = useRouter();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordReset = useCallback(async () => {
    if (router) {
      const { oobCode } = router.query;
      if (!oobCode) {
        setFormStatus('error');
        setFormMessage('Password reset code is required');
        return;
      }
      if (Array.isArray(oobCode)) {
        setFormStatus('error');
        setFormMessage('Multiple reset code found. ');
        return;
      }
      try {
        const auth = getAuth();
        const userEmail = await verifyPasswordResetCode(auth, oobCode);
        await confirmPasswordReset(auth, oobCode, newPassword);
        setFormStatus('success');
        setFormMessage(
          <>
            Success! your password has been reset. Click{' '}
            <Link href={Routing.getNamedRoute('login')}>here</Link> to login
            again.
          </>
        );
      } catch (error) {
        setFormStatus('error');
        setFormMessage('An error has occurred');
      }
    }
  }, [router, newPassword]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage('');
    if (confirmPassword !== newPassword) {
      setFormStatus('error');
      setFormMessage('Passwords do not match!');
    }
    await handlePasswordReset();
    setIsLoading(false);
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
      <h1>Reset your password</h1>
      <TextField
        id="reset-password"
        variant="outlined"
        label="New password"
        type="password"
        placeholder="*************"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <TextField
        id="reset-confirm-password"
        variant="outlined"
        label="Confirm new password"
        type="password"
        placeholder="*************"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Collapse in={!!formMessage}>
        <Alert severity={formStatus}>{formMessage}</Alert>
      </Collapse>
      <UserFormButton variant="contained" type="submit" isLoading={isLoading}>
        Reset my password
      </UserFormButton>
    </UserFormContainer>
  );
};

export default PasswordResetForm;
