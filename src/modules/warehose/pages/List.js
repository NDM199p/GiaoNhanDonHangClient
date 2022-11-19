import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Table } from "react-bootstrap";
import OrderFilter from "../../order/components/OrderFilter";
import OrderTable from "../../order/styles/OrderTable.module.scss";
import WarehoseAction from "../Action";

function ListWarehosePage() {
  let dispatch = useDispatch();
  let warehoseSelector = useSelector((state) => state.warehose);

  let orders = [];

  orders = warehoseSelector.orders;

  useEffect(() => {
    dispatch(WarehoseAction.addOrderWaitingForCustomerToSends({ transitAgentId: 9 }));
    dispatch(WarehoseAction.addAll());
  }, []);

  const handleRemoveWarehose = (warehoseId) => (e) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa. Nhấn Ok để tiếp tục!!") === true)
      dispatch(WarehoseAction.remove({ warehoseId }));
  };

  return (
    <div>
      <div>
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
      </div>
      <div className={`${OrderTable["orderTable"]} ps-3 pe-3`}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Mã đơn</th>
              <th>Bên nhận </th>
              <th>Tên kiện hàng</th>
              <th>Trạng thái đơn hàng</th>
              <th>Tùy chọn thanh toán</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((warehose) => (
              <tr>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>{warehose.id}</td>
                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>{warehose.name}</p>
                  </div>
                </td>

                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>{warehose.descri}</p>
                  </div>
                </td>
                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>Đang vận chuyển tới kho</p>
                  </div>
                </td>
                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>Quảng nam</p>
                  </div>
                </td>
                <td>
                  <Button variant="primary">Chi tiết khu vực</Button>
                  <Button
                    className="ms-3"
                    onClick={handleRemoveWarehose(warehose.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ListWarehosePage;
