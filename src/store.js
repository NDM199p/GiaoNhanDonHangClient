import { configureStore } from "@reduxjs/toolkit";
import order from "./modules/order/OrderSlice";
import auth from "./modules/auth/AuthSlice";
import area from "./modules/area/Slice";
import levelArea from "./modules/level_area/Slice";
import transitAgent from "./modules/transit_agent/Slice";
import warehose from "./modules/warehose/Slice";

export default configureStore({
  reducer: {
    order,
    auth,
    area,
    transitAgent,
    levelArea,
    warehose,
  },
});
