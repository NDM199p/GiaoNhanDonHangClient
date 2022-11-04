import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import IndexUserOrderLogPage from "./modules/order-logs/pages/index_user";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/order-logs",
    element: <IndexUserOrderLogPage />,
  },
]);
