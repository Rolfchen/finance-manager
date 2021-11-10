import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useUserState } from '../context/UserContext';
import useToggleLoginModal from '../hooks/useToggleLoginModal';

interface ProtectedContentWrapperProps {
  loginMethod: 'modal' | 'redirect';
}
/**
 * Wrapper to wrap protected content. If user is null, the content is hidden and a login modal will show up
 * @param param0
 * @returns
 */
const ProtectedContentWrapper: FC<ProtectedContentWrapperProps> = ({
  children,
  loginMethod = 'modal',
}) => {
  const { isReady, user } = useUserState();
  const router = useRouter();
  const { toggleModal } = useToggleLoginModal();

  useEffect(() => {
    if (isReady) {
      if (!user) {
        if (loginMethod === 'modal') {
          toggleModal(true);
        } else {
          router.push('/login');
        }
      }
    }
  }, [isReady, user, toggleModal]);

  return <>{isReady && children}</>;
};

export default ProtectedContentWrapper;
