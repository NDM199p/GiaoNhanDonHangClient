import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Table } from "react-bootstrap";
import OrderFilter from "../../order/components/OrderFilter";
import OrderTable from "../../order/styles/OrderTable.module.scss";
import AreaAction from "../Action";

function ListAreaPage() {
  let dispatch = useDispatch();
  let areaSelector = useSelector((state) => state.area);

  const handleRemoveArea = (areaId) => (e) => {
    dispatch(AreaAction.remove({ areaId }));
  };

  useEffect(() => {
    dispatch(AreaAction.addAll());
  }, []);

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
              <th>Mã khu vực</th>
              <th>Tên khu vực</th>
              <th>Level khu vực </th>
              <th>Mô tả</th>
              <th>Thuộc khu vực</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {areaSelector.areas.map((area) => (
              <tr>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>{area.id}</td>
                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>{area.name}</p>
                  </div>
                </td>
                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>Tỉnh </p>
                  </div>
                </td>

                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>{area.descri}</p>
                  </div>
                </td>
                <td>
                  <div className={OrderTable["__receiver"]}>
                    <p>Quảng nam</p>
                  </div>
                </td>
                <td>
                  <Button variant="primary">Chi tiết khu vực</Button>
                  <Button className="ms-3" onClick={handleRemoveArea(area.id)} variant="danger">
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

export default ListAreaPage;
