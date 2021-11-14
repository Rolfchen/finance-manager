import { useContext } from 'react';
import { AppModalStateContext } from './AppModalProvider';

/**
 * Hook to access the app modal states
 */
const useModalStates = () => {
  const appModalState = useContext(AppModalStateContext);
  if (typeof appModalState === 'undefined') {
    throw new Error('useModalStates must be used within a AppModalProvider');
  }
  return appModalState;
};

export default useModalStates;
