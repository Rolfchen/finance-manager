import { useCallback } from 'react';
import { useModalStateUpdater } from '../context/AppModalContext';

/**
 * Wrapper hook to toggle login modal via the app state modal
 * @returns the toggle modal function for login modal
 */
const useToggleLoginModal = () => {
  const { toggleModal: toggleModalWithKey } = useModalStateUpdater();

  const toggleModal = useCallback(
    (isOpen: boolean) => {
      toggleModalWithKey('loginModal', isOpen);
    },
    [toggleModalWithKey]
  );

  return {
    toggleModal,
  };
};

export default useToggleLoginModal;
