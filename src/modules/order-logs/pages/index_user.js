import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import FindOrderLogForm from "../components/FindOrderLogForm";

export default function IndexUserOrderLogPage() {
  let [input, setInput] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5fe" }}>
      <LoadingAnimationModal show={true} />

      <FindOrderLogForm />
      <div
        style={{ minHeight: "100vh", flexDirection: "column" }}
        className=" d-flex justify-content-center align-item-center"
      >
        <h2 className="text-center">Chưa nhập mã đơn hàng</h2>
        <p className="text-center">Vui lòng nhập mã đơn hàng để kiểm tra</p>
      </div>
    </div>
  );
}

function LoadingAnimationModal(props) {
  return (
    <Modal
      // style={{ width: "200px" }}
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        className="d-flex justify-content-center align-item-center"
        style={{ flexDirection: "column" }}
      >
        <h4 className="text-center">Loading</h4>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Modal.Body>
    </Modal>
  );
}
