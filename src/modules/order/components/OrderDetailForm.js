import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./OrderRightForm.css";

export const PaymentMethouds = ["Bên gửi trả phí", "Bên nhận trả phí"];

export default function OrderDetailForm({ priceService, formik }) {
  return (
    <div className="w-100 h-100 create-order-right-form ">
      {/* <div className="c-header mb-2">
        <div style={{}} className="c-item d-flex justify-content-between">
          <span>Gói Đi bộ</span>
          <span>{priceService} vnđ</span>
        </div>
      </div> */}

      <div style={{ display: "none" }} className="c-promotion ">
        {/* paddign -margin  congif*/}
        <div>
          <p className="p-0 m-0" style={{ fontSize: "11px", fontWeight: "600" }}>
            Mã khuyến mãi
          </p>
          <div style={{}} className="c-item d-flex justify-content-between">
            <Form.Control style={{ width: "70px" }} className="p-0 ps-2 pe-2 m-0" />
            <Button style={{ width: "70px" }} className="p-0">
              Áp dụng
            </Button>
          </div>
          <p style={{ fontSize: "11px", fontWeight: "600", height: "24px" }}>
            <i>Mỗi gói hàng chỉ được áp dụng 1 mã giảm giá.</i>
          </p>
        </div>
      </div>

      <br />
      <div className="c-footer ">
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "12px" }} className="m-0">
              Tuỳ chọn thanh toán
            </Form.Label>
            <Form.Select
              name="paymentPriceService"
              className="rounded-pill"
              onChange={formik.handleChange}
              aria-label="Default select example"
            >
              <option value="0">{PaymentMethouds[0]}</option>
              <option value="1">{PaymentMethouds[1]}</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div className="text-end">
          <span>Tổng phí</span>
          <p className="p-0 m-0">{priceService} vnđ</p>
          <p className="" style={{ fontSize: "12px" }}>
            {PaymentMethouds[formik.values.paymentPriceService]} - Chưa tính tiền thu hộ
          </p>
        </div>

        <div style={{}} className="c-item d-flex justify-content-between ">
          <Button variant="secondary" className="rounded-pill">
            Xóa đơn
          </Button>
          <Button type="submit" className="rounded-pill">
            Tạo đơn
          </Button>
        </div>
      </div>
    </div>
  );
}
