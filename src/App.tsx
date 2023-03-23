import "./App.css";
import { AppRoutes } from "./routes";
import { AppProvider } from "./providers/app";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}

const App = () => {
  useEffect(() => {
    window.dataLayer.push({
      randomNumber: Math.floor(10000 * Math.random()),
    });
    window.dataLayer.push({
      event: "user-property-push",
    });
  }, []);

  return (
    <div className="App">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
};

export default App;
