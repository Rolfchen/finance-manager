import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles';
import { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { UserContext, AppModalProvider } from 'de-fend';
import mockUser from './mocks/mockUsers.stub';

const MockProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppModalProvider>
        <UserContext.Provider
          value={{
            user: mockUser,
            isReady: true,
          }}
        >
          {children}
        </UserContext.Provider>
      </AppModalProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(ui, {
    wrapper: MockProvider,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
