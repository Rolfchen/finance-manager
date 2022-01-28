import { useContext } from 'react';
import { AppModalUpdateContext } from './AppModalProvider';

/**
 * Access modal state updaters. Includes setting isOpen state for modals
 * @returns
 */
const useModalStateUpdater = () => {
  const appUpdater = useContext(AppModalUpdateContext);
  if (typeof appUpdater === 'undefined') {
    throw new Error(
      'useModalStateUpdater must be used within a AppModalProvider'
    );
  }
  return appUpdater;
};

export default useModalStateUpdater;
