import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  paymentLogin: {
    color: "#fff",
  },
  paymentLoginNotNow: {
    color: theme.palette.text.secondary,
  },
}));

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function CustomDialog({
  message,
  rejectBtnText,
  acceptBtnText,
  open,
  closeDialog,
  userConfirm,
  link,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeDialog}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent style={{ padding: "16px 24px 0" }}>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {rejectBtnText && (
          <Button
            color="primary"
            className={classes.paymentLoginNotNow}
            onClick={closeDialog}
          >
            {rejectBtnText}
          </Button>
        )}

        <Button
          color="primary"
          variant="contained"
          component={Link}
          className={classes.paymentLogin}
          to={link}
          onClick={userConfirm}
        >
          {acceptBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
CustomDialog.defaultProps = {
  message: null,
  rejectBtnText: "Cancel",
  acceptBtnText: "Accept",
  userConfirm: null,
  link: null,
};

CustomDialog.propTypes = {
  message: PropTypes.string,
  rejectBtnText: PropTypes.string,
  acceptBtnText: PropTypes.string,
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  userConfirm: PropTypes.func,
  link: PropTypes.shape(),
};
export default CustomDialog;
