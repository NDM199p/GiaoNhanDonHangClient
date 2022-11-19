import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./modules/login/pages/login";
import IndexUserOrderLogPage from "./modules/order-logs/pages/index_user";

const PubllicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/order-logs",
    element: <IndexUserOrderLogPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default PubllicRoutes;
