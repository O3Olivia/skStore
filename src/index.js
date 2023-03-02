import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SignInContextProvider } from "./store/signIn-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SignInContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SignInContextProvider>
);
