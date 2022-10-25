import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";

// components
import WebinarForm from "components/Webinar/WebinarForm";

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
  },
}));

function DialogCustom({ open, setIsOpen, id }) {
  const classes = useStyles();

  return (
    <Dialog open={open} className={classes.root}>
      <DialogTitle disableTypography className={classes.dialogTitleWrapper}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContentWrapper}>
        <WebinarForm id={id} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
DialogCustom.defaultProps = {
  id: "",
};

DialogCustom.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  id: PropTypes.string,
};
export default DialogCustom;
