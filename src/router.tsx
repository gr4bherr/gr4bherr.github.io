import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import RawcalcPage from "./pages/RawcalcPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "rawcalc", element: <RawcalcPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
