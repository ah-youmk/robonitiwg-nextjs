import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '@/util/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
