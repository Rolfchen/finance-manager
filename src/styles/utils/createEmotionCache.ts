import createCache from '@emotion/cache';

/**
 * Creates an emotion cache for the client side.
 * Original code from: https://www.ansonlowzf.com/create-a-website-with-material-ui-v5-nextjs/
 * @returns client side cache
 */
const createEmotionCache = () =>
  createCache({
    key: 'css',
  });

export default createEmotionCache;
