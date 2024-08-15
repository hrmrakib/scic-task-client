import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
