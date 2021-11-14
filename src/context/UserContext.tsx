import { getAuth, User as FirebaseUser } from 'firebase/auth';
import { createContext, FC, useContext, useEffect, useState } from 'react';

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
  const auth = getAuth();

  useEffect(() => {
    if (!isReady && auth) {
      auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
        } else {
          setUser(null);
        }
        setIsReady(true);
      });
    }
  }, [isReady, auth]);

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
