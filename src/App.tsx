import ThemeProvider from "./theme/global";
import Header from "@components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="font-bold">Outlet das Carnes</div>
    </ThemeProvider>
  );
}

export default App;
