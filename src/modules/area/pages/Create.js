import { useFormik } from "formik";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../../order/components/order-form";
import OrderDetailForm from "../../order/components/OrderDetailForm";
import AreaAction from "../Action";

function CreateAreaPage() {
  let dispatch = useDispatch();
  let areaSelector = useSelector((state) => state.area);
  let levelAreaSelector = useSelector((state) => state.levelArea);
  let formik = useFormik({
    initialValues: {
      name: null,
      address: null,
      level: null,
      areaParent: null,
      descri: null,
    },
    onSubmit: (values) => {
      dispatch(AreaAction.add({ areaObject: values }));
    },
  });

  return (
    <>
      {areaSelector.isLoading && (
        <div
          className="w-100 d-flex"
          style={{
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            background: "black",
            zIndex: 1000,
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" variant="light" />
        </div>
      )}

      {areaSelector.areaError && <Alert variant="danger">{areaSelector.error.message}</Alert>}
      <form className="d-flex" onSubmit={formik.handleSubmit}>
        <div style={{ width: "80%", float: "left" }}>
          <div style={{ width: "600px", margin: "auto" }}>
            <br />
            <div>
              <div className="box">
                <h3 className="my-title-form">| Thông tin khu vực</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ fontWeight: 600, fontSize: 12, color: "#4b4b4b" }}
                    className="m-0"
                  >
                    Tên khu vực
                  </Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Nhập tên khu vực"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ fontWeight: 600, fontSize: 12, color: "#4b4b4b" }}
                    className="m-0"
                  >
                    Level
                  </Form.Label>
                  <Form.Select
                    name="level"
                    onChange={formik.handleChange}
                    value={formik.values.level}
                    className="rounded-pill"
                    aria-label="Default select example"
                  >
                    <option>Chọn level</option>
                    {levelAreaSelector.levelAreas.map((levelArea) => (
                      <option id={levelArea.id} value={levelArea.id}>
                        {levelArea.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ fontWeight: 600, fontSize: 12, color: "#4b4b4b" }}
                    className="m-0"
                  >
                    Mô tả
                  </Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    type="text"
                    name="descri"
                    onChange={formik.handleChange}
                    value={formik.values.descri}
                    placeholder="Nhập mô tả"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ fontWeight: 600, fontSize: 12, color: "#4b4b4b" }}
                    className="m-0"
                  >
                    Thuộc khu vực
                  </Form.Label>
                  <Form.Select className="rounded-pill" aria-label="Default select example">
                    <option>Chọn khu vực</option>
                    {areaSelector.areas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "20%", height: "100vh" }} className="border">
          {/* mảgin -padding */}
          <div className="m-3 h-100">
            <div className="w-100 h-100 create-order-right-form ">
              <div className="c-footer">
                <div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "12px" }} className="m-0">
                      Tuỳ chọn
                    </Form.Label>
                    <Form.Select className="rounded-pill" aria-label="Default select example">
                      <option value="1">Xuất bản</option>
                      <option value="2">Lưu nháp</option>
                    </Form.Select>
                  </Form.Group>
                </div>

                <div className="c-item d-flex justify-content-between w-100">
                  <Button variant="secondary" className="rounded-pill">
                    Hủy tạo
                  </Button>
                  <Button type="submit" className=" rounded-pill">
                    Tạo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateAreaPage;
