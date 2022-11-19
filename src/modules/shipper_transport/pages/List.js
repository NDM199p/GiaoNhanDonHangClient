import { Button, Form, Table } from "react-bootstrap";
import OrderFilter from "../../order/components/OrderFilter";
import OrderTable from "../../order/styles/OrderTable.module.scss";

function ListOrderShipperTransportPage() {
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
              <th>Bên gửi</th>
              <th>Bên nhận </th>
              <th>Tổng phí</th>
              <th>Ghi chú</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>GA6839</td>
              <td>
                <div className={OrderTable["__receiver"]}>
                  <p>Nguyen Duc my</p>
                  <p>0942277426 - Quang Nam</p>
                  <i>Ngày tạo: 20/11/2022</i>
                </div>
              </td>
              <td>
                <div className={OrderTable["__receiver"]}>
                  <p>Nguyen Duc my</p>
                  <p>0942277426 - Quang Nam</p>
                  <i>Ngày tạo: 20/11/2022</i>
                </div>
              </td>
              <td>120.000 vnđ</td>

              <td>
                <div className={OrderTable["__receiver"]}>
                  <p>Bên nhận trả phí</p>
                  <p>Tổng thu: 240.000 vnđ</p>
                  <i>(Bao gồm COD)</i>
                </div>
              </td>
              <td>
                <Button variant="primary">Chi tiết đơn hàng</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ListOrderShipperTransportPage;
