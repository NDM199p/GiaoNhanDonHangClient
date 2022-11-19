import { Button, Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import AuthAction from "../../auth/Actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginAction = {
  defaultLoginSucess: () => {},
  run: () => {},
};
// extend LoginAction
const LoginSucessAction = () => {
  const saveDataToLocal = () => {};
  const referectToken = () => {};
  const rdtoPage = () => {};
};

// extend LoginAction
const LoginFailed = (faildObject) => {
  let updateError = () => {};
};

function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let authSelector = useSelector((state) => state.auth);
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      dispatch(AuthAction.add(values));
    },
  });

  // handle success
  useEffect(() => {
    if (authSelector.auth.jwt) {
      navigate("/");
    }
  }, [authSelector.auth]);

  // show error
  useEffect(() => {
    if (authSelector.error.isError) {
      alert(authSelector.error.message);
    }
  }, [authSelector.error]);

  return (
    <Row className="m-0">
      <Col></Col>
      <Col>
        <div
          style={{ justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
          className="d-flex"
        >
          <Form onSubmit={formik.handleSubmit}>
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
