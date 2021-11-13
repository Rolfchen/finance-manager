import { useContext } from 'react';
import { AppModalStateContext } from './AppModalProvider';

/**
 * Hook to access specific modal's state
 *
 * @param key - key of the modal. The modal key must exist in the state already
 * @returns
 */
const useModalState = (key: string) => {
  const appModalState = useContext(AppModalStateContext);
  if (typeof appModalState === 'undefined') {
    throw new Error('useModalState must be used within a AppModalProvider');
  }
  return appModalState.modals?.[key] || { isOpen: false };
};

export default useModalState;
