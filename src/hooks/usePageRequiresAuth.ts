import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import useToggleLoginModal from './useToggleLoginModal';

/**
 * Hook to check whether a logged in user is present,
 * if not, redirect to login.
 */
const usePageRequiresAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const auth = getAuth();
  const { toggleModal } = useToggleLoginModal();

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
      setIsAuthReady(true);
    } else {
      setUser(null);
      setIsAuthReady(true);
    }
  });

  useEffect(() => {
    if (isAuthReady) {
      if (!user) {
        toggleModal(true);
      }
    }
  }, [toggleModal, isAuthReady, user]);

  return {
    user,
    isAuthReady,
  };
};

export default usePageRequiresAuth;
