import { Col, Row, Form, InputGroup } from "react-bootstrap";
import "./order-form.css";
import PropTypes from "prop-types";
import OrderFormElementLayout from "./OrderFormElementLayout";
import FormControlAndFeedback from "./FormControlAndFeedback";

OrderForm.propTypes = {
  formik: PropTypes.object,
};

export default function OrderForm({ formik, areas, transitAgents }) {
  let handleDefault = {
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
  };

  let invalid = (name) => !!formik.errors[name] && formik.touched[name];

  return (
    <div>
      <OrderFormElementLayout title="Thông tin người gửi">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="m-0">Khu vưc người gửi</Form.Label>
          <Form.Select
            name="senderArea"
            {...handleDefault}
            value={formik.values.senderArea}
            isInvalid={!!formik.errors.senderArea && formik.touched.senderArea}
            className="rounded-pill"
            aria-label="Default select example"
          >
            <option>Chọn Quận - Huyện</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{formik.errors.senderArea}</Form.Control.Feedback>
        </Form.Group>
      </OrderFormElementLayout>
      <hr />
      <OrderFormElementLayout title="Gửi hàng tại điểm giao nhận">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="m-0">Điểm giao nhận</Form.Label>
          <Form.Select
            disabled={!formik.values.senderArea || formik.errors.senderArea}
            name="senderTransitAgent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.senderTransitAgent && formik.touched.senderTransitAgent}
            value={formik.values.senderTransitAgent}
            className="rounded-pill"
            aria-label="Default select example"
          >
            <option>Chọn điểm thu nhận hàng</option>
            {transitAgents.map((transitAgent) => (
              <option key={transitAgent.id} value={transitAgent.id}>
                {transitAgent.name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formik.errors.senderTransitAgent}
          </Form.Control.Feedback>
        </Form.Group>
      </OrderFormElementLayout>
      <hr />

      <div className="box">
        <h3 className="my-title-form">| Bên nhận</h3>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label
                style={{ fontWeight: 600, fontSize: 12, color: "#4b4b4b" }}
                className="m-0"
              >
                Số điện thoại
              </Form.Label>
              <Form.Control
                className="rounded-pill"
                type="text"
                name="receiverPhone"
                onChange={formik.handleChange}
                value={formik.values.receiverPhone}
                onBlur={formik.handleBlur}
                placeholder="Nhập số điện thoại"
                isInvalid={!!formik.errors.receiverPhone && formik.touched.receiverPhone}
              />

              <Form.Control.Feedback type="invalid">
                {formik.errors.receiverPhone} Error
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="m-0">Họ tên</Form.Label>
              <Form.Control
                name="receiverFullName"
                onChange={formik.handleChange}
                value={formik.values.receiverFullName}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.receiverFullName && formik.touched.receiverFullName}
                className="rounded-pill"
                type="text"
                placeholder="Nhập họ và tên"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.receiverFullName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="m-0">Địa chỉ</Form.Label>
              <Form.Control
                {...handleDefault}
                isInvalid={invalid("receiverAddress")}
                name="receiverAddress"
                value={formik.values.receiverAddress}
                className="rounded-pill"
                type="text"
                placeholder="Nhập địa chỉ"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.receiverArea}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="m-0">Khu vực</Form.Label>
              <Form.Select
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.receiverArea && formik.touched.receiverArea}
                name="receiverArea"
                onChange={formik.handleChange}
                value={formik.values.receiverArea}
                className="rounded-pill"
                aria-label="Default select example"
              >
                <option>Chọn khu vực</option>
                {areas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.receiverArea}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </div>
      <hr />

      <div className="box">
        <h3 className="my-title-form">| Thông tin gói hàng</h3>

        <FormControlAndFeedback labelText="Tên kiện hàng" errorMessage={formik.errors.packageName}>
          <Form.Control
            name="packageName"
            {...handleDefault}
            isInvalid={invalid("packageName")}
            value={formik.values.packageName}
            className="rounded-pill"
            type="text"
            placeholder="Nhập tên kiện hàng"
          />
        </FormControlAndFeedback>

        <div
          style={{ flexDirection: "row" }}
          className="info-hh border p-2 rounded d-flex shadow-sm"
        >
          <div className="info-hh-element-image">
            <Form.Label className="border p-2 rounded-pill " for="exampleFormControlInput1">
              Upload
            </Form.Label>
            <Form.Control
              id="exampleFormControlInput1"
              style={{ width: "40px", display: "none" }}
              type="file"
            />
          </div>

          <div className="ms-2 info-hh-element-image">
            <InputGroup
              style={{ alignItems: "center", width: "200px", flexDirection: "row" }}
              className="mb-3 d-flex "
            >
              <Form.Label className="p-0 m-0">Tổng KL(gam)</Form.Label>
              <Form.Control
                name="packageMass"
                {...handleDefault}
                isInvalid={invalid("packageMass")}
                value={formik.values.packageMass}
                type="number"
                className="border-bottom border-0"
                aria-label="First name"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.packageMass}
              </Form.Control.Feedback>
            </InputGroup>
          </div>

          <div className="ms-2 info-hh-element-image">
            <InputGroup style={{ alignItems: "center" }} className="mb-3 d-flex ">
              <Form.Label className="p-0 m-0">Dài</Form.Label>
              <Form.Control
                name="packageLong"
                onChange={formik.handleChange}
                value={formik.values.packageLong}
                type="number"
                className="border-bottom border-0"
                aria-label="First name"
              />
            </InputGroup>
          </div>

          <div className="ms-2 info-hh-element-image">
            <InputGroup style={{ alignItems: "center" }} className="mb-3 d-flex ">
              <Form.Label className="p-0 m-0">Rộng</Form.Label>
              <Form.Control
                name="packageWidth"
                onChange={formik.handleChange}
                value={formik.values.packageWidth}
                type="number"
                className="border-bottom border-0 rounded-0"
                aria-label="First name"
              />
            </InputGroup>
          </div>

          <div className="ms-2 info-hh-element-image">
            <InputGroup style={{ alignItems: "center" }} className="mb-3 d-flex ">
              <Form.Label className="p-0 m-0">Cao</Form.Label>
              <Form.Control
                name="packageHeight"
                onChange={formik.handleChange}
                value={formik.values.packageHeight}
                type="number"
                className="border-bottom border-0 rounded-0"
                aria-label="First name"
              />
            </InputGroup>
          </div>
        </div>

        <div className="mt-3">
          <Row>
            <Col>
              <FormControlAndFeedback labelText="Tổng tiền thu hộ COD">
                <Form.Control
                  name="packageCod"
                  {...handleDefault}
                  value={formik.values.packageCod}
                  className="rounded-pill"
                  type="number"
                  placeholder="0"
                />
              </FormControlAndFeedback>
            </Col>
            <Col>
              <FormControlAndFeedback labelText={"Tổng giá trị hàng hoá"}>
                <Form.Control
                  name="packagePrice"
                  onChange={formik.handleChange}
                  value={formik.values.packagePrice}
                  className="rounded-pill"
                  type="number"
                  placeholder="0"
                />
              </FormControlAndFeedback>
            </Col>
          </Row>
        </div>
      </div>

      {/* <hr /> */}
      <div style={{ display: "none" }} className="box">
        <h3 className="my-title-form">| Gói cước</h3>

        <div className="goicuoc-selec">
          <div className="d-flex">
            <div className="flex-item">
              <div style={{ width: "200px" }}>
                <Form.Check type="radio">
                  <Form.Check.Input type="radio" />
                  <Form.Check.Label>
                    <p className="m-0 fw-bolder">Nhanh</p>
                    <span>50.000 VND</span>
                    <p className="m-0">Ngày giao dự kiến</p>
                    <span>20/02/2022</span>
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </div>

            <div className="flex-item">
              <div style={{ width: "200px" }}>
                <Form.Check type="radio">
                  <Form.Check.Input type="radio" />
                  <Form.Check.Label>
                    <p className="m-0 fw-bolder">Chuẩn</p>
                    <span>50.000 VND</span>
                    <p className="m-0">Ngày giao dự kiến</p>
                    <span>20/02/2022</span>
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="box">
        <h3 className="my-title-form">| Lưu ý - Ghi chú</h3>

        <div className="layout">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="m-0">Lưu ý giao hàng</Form.Label>
                <Form.Select
                  name="noteTransport"
                  onChange={formik.handleChange}
                  value={formik.values.noteTransport}
                  className="rounded-pill"
                  aria-label="Default select example"
                >
                  <option value="1">Không cho xem hàng</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="m-0">Thêm mã đơn khách hàng </Form.Label>
                <Form.Control
                  className="rounded-pill"
                  name="noteCode"
                  onChange={formik.handleChange}
                  value={formik.values.noteCode}
                  type="text"
                  placeholder="Nhập mã đơn khách hàng"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="m-0">Ghi chú</Form.Label>
                <Form.Control
                  name="noteMsg"
                  onChange={formik.handleChange}
                  value={formik.values.noteMsg}
                  style={{ borderRadius: "20px" }}
                  placeholder="Ví dụ: Lấy sản phẩm 1 2 cái, lấy sản phẩm 2 1 cái"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
