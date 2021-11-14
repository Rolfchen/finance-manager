import { FirebaseOptions, initializeApp } from 'firebase/app';

/**
 * Initialize Firebase with project config
 * @returns app instance
 */
const initFirebase = () => {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${projectId}.firebaseapp.com`,
    projectId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  return initializeApp(firebaseConfig);
};

export default initFirebase;
