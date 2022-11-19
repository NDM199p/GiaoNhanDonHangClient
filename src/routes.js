import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import App from "./App";
import CustommerRoutes from "./CustomerRoutes";
import IndexUserOrderLogPage from "./modules/order-logs/pages/index_user";
import CreateOrderPage from "./modules/order/pages/create";
import ListOrderPage from "./modules/order/pages/list";
import ListOrderShipperTransportPage from "./modules/shipper_transport/pages/List";
import PubllicRoutes from "./PublicRoutes";

const routes = () => {
  if (window.location.host.split(".")[0] === "customer") {
    console.log(window.location.host.split("."));
    return CustommerRoutes;
  } else if (window.location.host.split(".")[0] === "admin") {
    return AdminRoutes;
  } else {
    return PubllicRoutes;
  }
};

export default routes;

// export default createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/order-logs",
//     element: <IndexUserOrderLogPage />,
//   },
//   {
//     path: "/order/create",
//     element: <CreateOrderPage />,
//   },
//   {
//     path: "/order/list",
//     element: <ListOrderPage />,
//   },
//   {
//     path: "/shipper/transports",
//     element: <ListOrderShipperTransportPage />,
//   },
// ]);
