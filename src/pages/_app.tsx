import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { darkTheme, theme } from '@material/theme';
import createEmotionCache from '@material/createEmotionCache';
import '@styles/globals.css';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CookiesProvider } from 'react-cookie';
import useDarkModeToggle from '@hooks/useDarkModeToggle'
import DarkModeContext from '@context/DarkModeContext'
import { experimentalTheme } from '@material/experimentalTheme';

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const { loading, currentTheme, toggleColorMode } = useThemeInitilizer()

  if (loading) return null;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>EMERALD Taxi & Tours</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <CookiesProvider>
        <DarkModeContext.Provider value={toggleColorMode}>
          {/* <CssVarsProvider defaultMode='system'
          theme={experimentalTheme}
          colorSchemeNode={node || null}
          colorSchemeSelector="#mui-variant-base"
          colorSchemeStorageKey="custom-theme-color-scheme"
          modeStorageKey="custom-theme-mode"
        > */}
          <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          {/* </CssVarsProvider> */}
        </DarkModeContext.Provider>
      </CookiesProvider>

    </CacheProvider>
  )
}

function useThemeInitilizer() {
  const [loading, setLoading] = React.useState(true);

  // ! MUI Theme Provider methodology
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme:dark)');

  const { isDarkMode, toggleColorMode } = useDarkModeToggle(prefersDarkMode);
  const currentTheme = React.useMemo(() => isDarkMode ? darkTheme : theme, [isDarkMode]);


  React.useEffect(() => { setLoading(false) }, []);

  return { currentTheme, toggleColorMode, loading };
}