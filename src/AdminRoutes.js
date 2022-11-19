import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layout/Admin";
import CreateAreaPage from "./modules/area/pages/Create";
import ListAreaPage from "./modules/area/pages/List";
import CreateOrderPage from "./modules/order/pages/create";
import ListOrderPage from "./modules/order/pages/list";
import CreateTransitAgentPage from "./modules/transit_agent/pages/Create";
import ListTransitAgentPage from "./modules/transit_agent/pages/List";
import ListWarehosePage from "./modules/warehose/pages/List";
import ListOrderWaitingForCustomerToSendsPage from "./modules/warehose/pages/ListOrderWaitingForCustomerToSends";

const AdminRoutes = createBrowserRouter([
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/order/create",
        element: <CreateOrderPage />,
      },
      {
        path: "/order/list",
        element: <ListOrderPage />,
      },
      {
        path: "/areas",
        element: <ListAreaPage />,
      },
      {
        path: "/area/create",
        element: <CreateAreaPage />,
      },
      {
        path: "/transit-agents",
        element: <ListTransitAgentPage />,
      },
      {
        path: "/transit-agent/create",
        element: <CreateTransitAgentPage />,
      },
      {
        path: "/warehose/orders",
        element: <ListWarehosePage />,
      },
      {
        path: "/warehose/orders/waiting-for-customer-to-send",
        element: <ListOrderWaitingForCustomerToSendsPage />,
      },
    ],
  },
]);

export default AdminRoutes;
