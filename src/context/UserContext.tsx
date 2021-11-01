import { getAuth, User as FirebaseUser } from 'firebase/auth';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import useToggleLoginModal from '../hooks/useToggleLoginModal';

export interface UserProfile extends FirebaseUser {
  // TODO - Make this useful
  nativeId?: string;
}

export interface UserContextState {
  user: UserProfile | null;
  isReady?: boolean;
}

export const UserContext = createContext<UserContextState | undefined>(
  undefined
);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const { toggleModal } = useToggleLoginModal();
  const auth = getAuth();

  useEffect(() => {
    if (!isReady && auth) {
      auth.onAuthStateChanged((firebaseUser) => {
        console.log('Invoked state change');
        if (firebaseUser) {
          setUser(firebaseUser);
        } else {
          setUser(null);
        }
        setIsReady(true);
      });
    }
  }, [isReady, auth]);

  useEffect(() => {
    if (isReady) {
      if (!user) {
        console.log('Start toggling');
        toggleModal(true);
      }
    }
  }, [isReady, user, toggleModal]);

  return (
    <UserContext.Provider
      value={{
        user,
        isReady,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => {
  const userState = useContext(UserContext);
  if (typeof userState === 'undefined') {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return userState;
};
