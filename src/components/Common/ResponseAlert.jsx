import React from "react";
import PropTypes from "prop-types";

// material-ui/core
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// material-ui/lab
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: { direction: "ltr" },
  alertText: {
    whiteSpace: "pre-wrap",
    textAlign: "left",
  },
}));
function ResponseAlert({ type, text, variant }) {
  const classes = useStyles();

  return (
    <>
      {text && (
        <Alert variant={variant} elevation={2} severity={type}>
          <Typography variant="body1" className={classes.alertText}>
            {text}
          </Typography>
        </Alert>
      )}
    </>
  );
}

ResponseAlert.defaultProps = {
  type: "error",
  text: null,
  variant: "filled",
};

ResponseAlert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined"]),
};

export default ResponseAlert;
