import { getAuth, onAuthStateChanged, User, Auth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import useToggleLoginModal from './useToggleLoginModal';

interface UseFirebaseUserOptions {
  onReady?: (user: User | null) => void;
  shouldShowLogin?: boolean;
}

interface UseFirebaseUserResult {
  user: User | null;
  isAuthReady: boolean;
}
/**
 * @deprecate - See UserContext
 * Hook to check whether a logged in user is present,
 * if not, redirect to login.
 * @param options - options to pass to the hook
 * @param options.onReady - optional callback invoked when auth is ready
 * @param options.shouldShowLogin - Should display login modal if user is null
 */
const useFirebaseUser = (
  options?: UseFirebaseUserOptions
): UseFirebaseUserResult => {
  const { onReady, shouldShowLogin = true } = options || {};
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const auth = getAuth();

  const { toggleModal } = useToggleLoginModal();

  useEffect(() => {
    if (isAuthReady) {
      if (!user && shouldShowLogin) {
        toggleModal(true);
      }
      if (onReady) {
        onReady(user);
      }
    } else {
      console.log('Invoked');
      auth.onAuthStateChanged((firebaseUser) => {
        console.log('Auth state changed');
        if (firebaseUser) {
          setUser(firebaseUser);
          setIsAuthReady(true);
        } else {
          setUser(null);
          setIsAuthReady(true);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleModal, isAuthReady, user]);

  return {
    user,
    isAuthReady,
  };
};

export default useFirebaseUser;
