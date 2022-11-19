import { Button, Form, Table } from "react-bootstrap";
import OrderFilter from "../components/OrderFilter";
// import ReceiverTableElement from "../styles/ReceiverTableElement.module.scss";
import OrderTable from "../styles/OrderTable.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import OrderAction from "../ThunkActions";
import HeaderOrders from "../components/HeaderOrder";
import { PaymentMethouds } from "../components/OrderDetailForm";

const ORDER_TAG_KEY = {
  CHO_BAN_GIAO: 0,
  DON_HUY: 1,
};

const ListOrderPage = () => {
  const dispatch = useDispatch();
  const orderSelector = useSelector((state) => state.order);
  const areaSelector = useSelector((state) => state.area);
  let orders = orderSelector.orders;
  let [tag, setTag] = useState(ORDER_TAG_KEY.CHO_BAN_GIAO);

  const orderFilters = () => {
    switch (tag) {
      case ORDER_TAG_KEY.CHO_BAN_GIAO:
        return orders.filter((order) => !order.isCancel);
      case ORDER_TAG_KEY.DON_HUY:
        return orders.filter((order) => order.isCancel);
      default:
        return orders;
    }
  };

  const handleCancelOrder = (orderId) => (e) => {
    if (window.confirm("Bạn có chắc chắn muốn hủy đơn hàng. Nhấn Ok để tiếp tục!!") === true)
      dispatch(OrderAction.cancel({ orderId }));
  };

  const modifyAction = (id) => {
    switch (tag) {
      case ORDER_TAG_KEY.CHO_BAN_GIAO:
        return (
          <td>
            <Button onClick={handleCancelOrder(id)} variant="danger">
              Hủy đơn hàng
            </Button>
          </td>
        );
      case ORDER_TAG_KEY.DON_HUY:
        return (
          <div>
            <Button onClick={handleCancelOrder(id)} variant="primary">
              Sử dụng lại thông tin
            </Button>
          </div>
        );
      default:
        return orders;
    }
  };

  const getArea = (id) => areaSelector.areas.find((area) => area.id === id);

  const OrderComponents = orderFilters().map((order, index) => (
    <tr key={order.id}>
      <td>
        <Form.Check type="checkbox" />
      </td>
      <td>{order.id}</td>
      <td>
        <div className={OrderTable["__receiver"]}>
          <p>{order.receiverFullName}</p>
          <p>
            {order.receiverPhone} -{" "}
            {getArea(order.receiverArea) ? getArea(order.receiverArea).name : ""}
          </p>
          <i>Ngày tạo: {new Date(order.createdAt).toLocaleDateString()}</i>
        </div>
      </td>
      {/* <td>{order.priceService + " vnđ"} </td>
      <td>{order.packageCod + " vnđ"}</td> */}

      <td>
        <div className={OrderTable["__receiver"]}>
          <p>{PaymentMethouds[order.paymentPriceService ? 1 : 0]}</p>
          <p>
            Phí dịch vụ: {order.priceService} VND
            <span style={{ color: "blue" }}>
              {!order.paymentPriceService ? "(Chưa thanh toán)" : "(Đã thanh toán)"}
            </span>
          </p>
          <hr />
          <p>{PaymentMethouds[1]}</p>
          <p>
            COD: {order.priceService} VND{" "}
            <span style={{ color: "blue" }}>
              {!order.paymentPriceService ? "(Chưa thanh toán)" : "(Đã thanh toán)"}
            </span>
          </p>
        </div>
      </td>
      {modifyAction(order.id)}
    </tr>
  ));

  useEffect(() => {
    dispatch(OrderAction.addAll());
  }, []);

  return (
    <div>
      <HeaderOrders.Group>
        <HeaderOrders.Item
          active={tag === ORDER_TAG_KEY.CHO_BAN_GIAO ?? true}
          contentText="Chờ bàn giao"
          onClick={() => setTag(ORDER_TAG_KEY.CHO_BAN_GIAO)}
        />
        <HeaderOrders.Item
          onClick={() => setTag(ORDER_TAG_KEY.DON_HUY)}
          active={tag === ORDER_TAG_KEY.DON_HUY ?? true}
          contentText="Đơn hủy"
        />
      </HeaderOrders.Group>

      <hr />

      <OrderFilter>
        <div
          className="p-3"
          style={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "600" }}
        >
          <p>Bộ lọc</p>
        </div>
        <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
          <Form.Label>Trạng thái</Form.Label>
          <Form.Select className="rounded-pill">
            <option>Tất cả</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
          <Form.Label>Tùy chọn thanh toán</Form.Label>
          <Form.Select className="rounded-pill">
            <option>Tất cả</option>
            <option>Default select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
          <Form.Label>In vận đơn</Form.Label>
          <Form.Select className="rounded-pill">
            <option>Tất cả</option>
            <option>Default select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
          <Form.Label>Thời gian tạo đơn</Form.Label>
          <Form.Select className="rounded-pill">
            <option>Tất cả</option>
            <option>Default select</option>
          </Form.Select>
        </Form.Group>
        <div
          className="p-3"
          style={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "600" }}
        >
          <p>Hiển thị 0/0 đơn hàng</p>
        </div>
      </OrderFilter>
      <div className={`${OrderTable["orderTable"]} ps-3 pe-3`}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Mã đơn</th>
              <th>Bên nhận </th>
              <th>Thanh toán</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{OrderComponents}</tbody>
        </Table>
      </div>
    </div>
  );
};
export default ListOrderPage;
