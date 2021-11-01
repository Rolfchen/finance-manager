import { FC } from 'react';
import { useUserState } from '../context/UserContext';

/**
 * Wrapper to wrap protected content. If user is null, the content is hidden and a login modal will show up
 * @param param0
 * @returns
 */
const ProtectedContentWrapper: FC = ({ children }) => {
  const { isReady } = useUserState();

  return <>{isReady && children}</>;
};

export default ProtectedContentWrapper;
