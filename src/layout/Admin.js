import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import NavbarCustomer from "./styles/NavbarCustomer.module.scss";
import AreaAction from "../modules/area/Action";
import TransitAgentAction from "../modules/transit_agent/Action";
import LevelAreaAction from "../modules/level_area/Action";

function AdminLayout({ children }) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(LevelAreaAction.addAll());
    dispatch(AreaAction.addAll());
    dispatch(TransitAgentAction.addAll());
  }, []);

  return (
    <div>
      <div className={`${NavbarCustomer["NavbarCustomer"]} position-fixed`}>
        <ListGroup variant="flush">
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/"}>Home</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/order/create"}>Tạo đơn hàng</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/order/list"}>Quản lý đơn hàng</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/areas"}>Quản lý khu vực</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/area/create"}>Thêm khu vực</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/transit-agents"}>Quản lý điểm thu gom</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/transit-agent/create"}>Thêm điểm thu gom</Link>
          </ListGroup.Item>
          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/warehose/orders"}>Quản lý kho</Link>
          </ListGroup.Item>

          <ListGroup.Item className={NavbarCustomer["list-group-item"]}>
            <Link to={"/warehose/orders/waiting-for-customer-to-send"}>
              Quản lý đơn hàng chờ khách hàng gửi
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div style={{ paddingLeft: "280px", width: "100%", height: "100vh" }}>
        {children ? children : <Outlet />}
      </div>
    </div>
  );
}

export default AdminLayout;
