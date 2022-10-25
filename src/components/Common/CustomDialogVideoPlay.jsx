/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
} from "@material-ui/core";

// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  dialogTitleWrapper: {
    padding: theme.spacing(0, 3),
  },
  closeButton: {
    marginLeft: theme.spacing(-1.5),
  },
  dialogContentWrapper: {
    padding: theme.spacing(0, 3, 2),
    "& > video": {
      width: theme.spacing(75),
      maxWidth: "100%",
    },
  },
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

function CustomDialogVideoPlay({
  open,
  setIsOpenVideoPreview,
  videoPreviewUrl,
  setVideoPreviewUrl,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      className={classes.root}
    >
      <DialogTitle disableTypography className={classes.dialogTitleWrapper}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => {
            setIsOpenVideoPreview(false);
            setVideoPreviewUrl("");
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContentWrapper}>
        <video src={videoPreviewUrl} controls />
      </DialogContent>
    </Dialog>
  );
}

CustomDialogVideoPlay.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsOpenVideoPreview: PropTypes.func.isRequired,
  videoPreviewUrl: PropTypes.string.isRequired,
  setVideoPreviewUrl: PropTypes.func.isRequired,
};
export default CustomDialogVideoPlay;
