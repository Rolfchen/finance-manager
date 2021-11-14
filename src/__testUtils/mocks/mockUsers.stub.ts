import { UserProfile } from '@/context/UserContext';
import { User } from '@firebase/auth';

const idToken = 'test_id_token';

const mockFirebaseUser: User = {
  // User Info
  displayName: 'Test User',
  email: 'test@testuser.com',
  phoneNumber: null,
  photoURL: 'https://testuser.com/profile.png',
  providerId: '',
  uid: 'firebase-test-user-uid',
  // Firebase User props
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: 'test_refresh_token',
  tenantId: null,
  delete: jest.fn(),
  getIdToken: jest.fn().mockImplementation(() => Promise.resolve(idToken)),
  getIdTokenResult: jest.fn().mockImplementation(() =>
    Promise.resolve({
      authTime: '',
      expirationTime: '',
      issuedAtTime: '',
      signInProvider: null,
      signInSecondFactor: null,
      token: idToken,
      claims: {},
    })
  ),
  reload: jest.fn(),
  // TODO: May need to mock implementation
  toJSON: jest.fn(),
};

const mockUser: UserProfile = {
  ...mockFirebaseUser,
};

export default mockUser;
