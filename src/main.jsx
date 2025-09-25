import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Study from "./pages/Study";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/study" element={<Study />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
