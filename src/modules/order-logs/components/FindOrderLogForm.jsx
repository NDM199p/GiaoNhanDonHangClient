import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function FindOrderLogForm() {
  return (
    <Nav style={{}} className="justify-content-center bg-white">
      <Form style={{ width: "600px" }} className="m-3">
        <Row>
          <Col className="col-9">
            <Form.Control
              className="border-0"
              style={{ width: "100%", background: "#f5f5f5" }}
              type="text"
              placeholder="Nhập đơn hàng để tìm kiếm"
            />
          </Col>
          <Col>
            <Button className="border-0" style={{ background: "#f26522" }}>
              <BsSearch style={{ marginRight: "5px" }} />
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>
    </Nav>
  );
}
