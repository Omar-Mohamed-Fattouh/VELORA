import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import favicon from "./assets/Logo.png";

const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.type = "image/png";
faviconLink.href = favicon;
document.head.append(faviconLink);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
