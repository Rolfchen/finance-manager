import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useModalStateUpdater } from '../context/AppModalContext';

/**
 * Hook to check whether a logged in user is present,
 * if not, redirect to login.
 */
const usePageRequiresAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const auth = getAuth();
  const { toggleModal } = useModalStateUpdater();

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
        console.log('Toggling Modal');
        toggleModal('loginModal', true);
      }
    }
  }, [toggleModal, isAuthReady, user]);

  return {
    user,
    isAuthReady,
  };
};

export default usePageRequiresAuth;
