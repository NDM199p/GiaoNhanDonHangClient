import { ListGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import NavbarCustomer from "./styles/NavbarCustomer.module.scss";

function CustomerLayout({ children }) {
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
        </ListGroup>
      </div>
      <div style={{ marginLeft: "350px" }}>{children ? children : <Outlet />}</div>
    </div>
  );
}

export default CustomerLayout;
