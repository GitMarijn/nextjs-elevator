import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { DEFAULT_THEME } from "../styles/theme";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
