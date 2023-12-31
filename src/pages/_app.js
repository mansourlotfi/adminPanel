import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "src/contexts/auth-context";
import { useNProgress } from "src/hooks/use-nprogress";
import { createTheme } from "src/theme";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import "../layouts/styles.css";
// import { prefixer } from "stylis";

// import { createEmotionCache } from "src/utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";

// const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;
// const cacheRtl = createCache({ key: "muirtl", stylisPlugins: [prefixer, rtlPlugin] });
const cacheRtl = createCache({ key: "muirtl", stylisPlugins: [rtlPlugin] });

const App = (props) => {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { Component, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (
    <CacheProvider value={cacheRtl}>
      <Head>
        <title>Devias Kit</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthConsumer>
              {(auth) =>
                auth.isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)
              }
            </AuthConsumer>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
