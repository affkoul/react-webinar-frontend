import React from "react";
import PropTypes from "prop-types";

// material-ui/core
import { Typography } from "@material-ui/core";

// material-ui/lab
import { Alert } from "@material-ui/lab";

function AlertResponse({ message, type }) {
  return (
    <div>
      {message && (
        <Alert variant="filled" elevation={2} severity={type}>
          <Typography variant="body1">{message}</Typography>
        </Alert>
      )}
    </div>
  );
}

AlertResponse.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

AlertResponse.defaultProps = {
  message: null,
  type: "error",
};

export default AlertResponse;
