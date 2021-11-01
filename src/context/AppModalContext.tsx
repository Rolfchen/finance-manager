import { createContext, useCallback, useContext, useReducer } from 'react';

export interface ModalState {
  isOpen: boolean;
}

export interface AppModalState {
  modals: Record<string, ModalState>;
}

export interface AppModalUpdateMethods {
  toggleModal: (key: string, isOpen: boolean) => void;
}

export interface AppModalProviderProps {
  children: React.ReactNode;
}

export type AppModalAction = {
  type: 'TOGGLE_MODAL';
  key: string;
  isOpen: boolean;
};

const appModalReducer = (state: AppModalState, action: AppModalAction) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.key]: {
            isOpen: action.isOpen,
          },
        },
      };
    default:
      return state;
  }
};

/**
 * Initial state of context.modals
 */
const appModals: Record<string, ModalState> = {};

/**
 * Initial state of the context
 */
const appModalContextState: AppModalState = {
  modals: {
    ...appModals,
  },
};

/**
 * Manages the internal states for the app level modals.
 */
const AppModalStateContext = createContext<AppModalState | undefined>(
  undefined
);
/**
 * The dispatch and update actions for the modal states
 */
const AppModalUpdateContext = createContext<AppModalUpdateMethods | undefined>(
  undefined
);

/**
 * AppModalProvider provides modal state management features
 */
const AppModalProvider = ({ children }: AppModalProviderProps) => {
  const [state, dispatch] = useReducer(appModalReducer, appModalContextState);

  const toggleModal = useCallback(
    (key: string, isOpen: boolean) => {
      dispatch({
        type: 'TOGGLE_MODAL',
        key,
        isOpen,
      });
    },
    [dispatch]
  );

  return (
    <AppModalStateContext.Provider
      value={{
        ...state,
      }}
    >
      <AppModalUpdateContext.Provider
        value={{
          toggleModal,
        }}
      >
        {children}
      </AppModalUpdateContext.Provider>
    </AppModalStateContext.Provider>
  );
};

/**
 * Hook to access the app modal states
 */
export const useModalStates = () => {
  const appModalState = useContext(AppModalStateContext);
  if (typeof appModalState === 'undefined') {
    throw new Error('useModalStates must be used within a AppModalProvider');
  }
  return appModalState;
};

/**
 * Hook to access specific modal's state
 *
 * @param key - key of the modal. The modal key must exist in the state already
 * @returns
 */
export const useModalState = (key: string) => {
  const appModalState = useContext(AppModalStateContext);
  if (typeof appModalState === 'undefined') {
    throw new Error('useModalState must be used within a AppModalProvider');
  }
  return appModalState.modals?.[key] || { isOpen: false };
};

/**
 * Access modal state updaters. Includes setting isOpen state for modals
 * @returns
 */
export const useModalStateUpdater = () => {
  const appUpdater = useContext(AppModalUpdateContext);
  if (typeof appUpdater === 'undefined') {
    throw new Error(
      'useModalStateUpdater must be used within a AppModalProvider'
    );
  }
  return appUpdater;
};

export default AppModalProvider;
