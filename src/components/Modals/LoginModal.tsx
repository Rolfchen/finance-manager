import { Dialog } from '@mui/material';
import LoginForm from '@/domain/User/Login/LoginForm';
import { useModalState, useModalStateUpdater } from '@/context/AppModal';

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
