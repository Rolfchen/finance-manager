import { OAuthProvider } from '@firebase/auth';

/** A Firebase Microsoft Auth Provider. */
const MicrosoftAuthProvider = new OAuthProvider('microsoft.com');

export default MicrosoftAuthProvider;
