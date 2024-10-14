import ThemeProvider from "./theme/global";
import Header from "@components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
