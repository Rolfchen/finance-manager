import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useUserState, useToggleLoginModal } from 'de-fend';

export type LoginMethod = 'modal' | 'redirect';
export interface ProtectedContentWrapperProps {
  loginMethod?: LoginMethod;
}
/**
 * Wrapper to wrap protected content. If user is null, the content is hidden and a login modal will show up
 * @param props
 * @param props.loginMethod - Determines which login method to prompt the user when they are not logged in. Defaults to 'modal'. The alternative is 'redirect'
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
  }, [isReady, user, toggleModal, router, loginMethod]);

  return <>{isReady && children}</>;
};

export default ProtectedContentWrapper;
