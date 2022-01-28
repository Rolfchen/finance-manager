import { getAuth, signOut } from 'firebase/auth';
import { Logger } from '.';

/**
 * Helper function to handle user sign out.
 * @returns whether signout was successful
 */
const signOutUser = async (): Promise<boolean> => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    // TODO: Add logger of some sort.
    Logger.error('Failed to signout user');
    return false;
  }
};

export default signOutUser;
