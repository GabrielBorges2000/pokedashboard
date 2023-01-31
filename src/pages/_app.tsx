import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/hader';
import { GlobalStyle } from '../styles/defaultTheme';
import { theme } from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
