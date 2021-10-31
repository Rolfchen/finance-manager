import { getAuth, signOut } from 'firebase/auth';

/**
 * Helper function to handle user sign out.
 * @returns whether signout was successful
 */
const signOutUser = async (): Promise<boolean> => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log('User signed out');
    return true;
  } catch (error) {
    console.log('Failed to signout user');
    return false;
  }
};

export default signOutUser;
