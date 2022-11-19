import { Button, Stack } from "react-bootstrap";
import PropTypes from "prop-types";

const HeaderOrders = {
  Group: ({ children }) => {
    return (
      <Stack className="p-2" direction="horizontal">
        {children}
      </Stack>
    );
  },
  Item: ({ children, contentText, onClick, active }) => {
    return (
      <Button
        onClick={onClick}
        className="me-2 rounded-pill"
        variant={active ? "primary" : "light"}
      >
        {contentText}
      </Button>
    );
  },
};

HeaderOrders.Item.propTypes = {
  onClick: PropTypes.func,
  contentText: PropTypes.string,
  active: PropTypes.bool,
};

export default HeaderOrders;
