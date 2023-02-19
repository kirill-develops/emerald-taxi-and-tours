import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { darkTheme, theme } from '@material/theme';
import createEmotionCache from '@material/createEmotionCache';
import '@styles/globals.css';
import { Experimental_CssVarsProvider as CssVarsProvider, useMediaQuery } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [mounted, setMounted] = React.useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme:dark)');

  React.useEffect(() => { setMounted(true) }, []);

  if (!mounted) return null;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      {/* <CssVarsProvider defaultMode='system'> */}
      <ThemeProvider theme={prefersDarkMode ? darkTheme : theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </CssVarsProvider> */}
    </CacheProvider>
  )
}