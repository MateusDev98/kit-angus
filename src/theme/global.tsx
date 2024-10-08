import {
  createTheme,
  ThemeProvider as MaterialUIThemeProvider,
} from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

const theme = createTheme({}, ptBR);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaterialUIThemeProvider theme={theme}>{children}</MaterialUIThemeProvider>
  );
};

export default ThemeProvider;
