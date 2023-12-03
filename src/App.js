import { ThemeProvider } from 'styled-components';
import { NavBar } from './components/NavBar';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
  );
}
