import { ChangeEvent, FormEvent, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AlertColor, Dialog } from '@mui/material';
import { PageContainer } from '../../styles/layout';

import { FirebaseError } from '@firebase/util';
import {
  useModalState,
  useModalStateUpdater,
} from '../../context/AppModalContext';
import LoginForm from '../Login/LoginForm';

interface LoginModalProps {
  onClose?: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const { isOpen = false } = useModalState('loginModal');
  const { toggleModal } = useModalStateUpdater();

  const handleSuccess = () => {
    toggleModal('loginModal', false);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <LoginForm onSuccess={handleSuccess} />
    </Dialog>
  );
};

export default LoginModal;
