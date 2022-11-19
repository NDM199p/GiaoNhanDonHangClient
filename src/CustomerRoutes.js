import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "./layout/Customer";
import CreateOrderPage from "./modules/order/pages/create";
import ListOrderPage from "./modules/order/pages/list";

const CustommerRoutes = createBrowserRouter([
  {
    element: <CustomerLayout />,
    children: [
      {
        path: "/order/create",
        element: <CreateOrderPage />,
      },
      {
        path: "/order/list",
        element: <ListOrderPage />,
      },
    ],
  },
]);

export default CustommerRoutes;
