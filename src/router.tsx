import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import RawcalcPage from "./pages/rawcalc/RawcalcPage";
import SupportPage from "./pages/rawcalc/SupportPage";
import PrivacyPolicyPage from "./pages/rawcalc/PrivacyPolicyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "rawcalc",
        children: [
          { path: "", element: <RawcalcPage /> },
          { path: "support", element: <SupportPage /> },
          { path: "privacypolicy", element: <PrivacyPolicyPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
