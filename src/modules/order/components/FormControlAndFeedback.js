import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormControlAndFeedback = ({ children, errorMessage, labelText }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="m-0">{labelText}</Form.Label>
      {children}
      <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
    </Form.Group>
  );
};

FormControlAndFeedback.propTypes = {
  labelText: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default FormControlAndFeedback;
