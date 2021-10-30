import type { AppProps } from 'next/app';
import { createEmotionCache, theme } from '../styles';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import initFirebase from '../utils/server/initFirebase';

const clientSideEmotionCache = createEmotionCache();

export type ExtendedAppProps = AppProps & {
  emotionCache: EmotionCache;
};
/**
 * Custom NextJS Client App
 * This uses example from MUI - https://github.com/mui-org/material-ui/tree/master/examples/nextjs
 * @param param0
 * @returns
 */

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) {
  initFirebase();
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
