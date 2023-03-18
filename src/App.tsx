import "./App.css";
import { AppRoutes } from "./routes";
import { AppProvider } from "./providers/app";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
