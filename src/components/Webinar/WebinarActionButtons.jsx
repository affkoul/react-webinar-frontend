import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

// utils
import { toFaDigit } from "utils/commonUtils";

// moment-jalaali
// import jMoment from "moment-jalaali";

// moment-jalaali initiate
// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const useStyles = makeStyles({
  root: {},
  wrapperStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "46px",
    direction: "ltr",
  },
  actionBtn: {
    color: "#fff",
  },
});

function WebinarActionButtons({ slug, time, duration, price, isOwned }) {
  const classes = useStyles();

  const durationMiliSecond = parseInt(duration, 10) * 60000;
  const currentFullDate = new Date();
  const currentMiliSecond = currentFullDate.getTime();
  const webinarFullDate = new Date(time);
  const webinarMiliSecond = webinarFullDate.getTime();
  const waitingFullDate = new Date(webinarFullDate - currentFullDate);
  waitingFullDate.setTime(
    waitingFullDate.getTime() + waitingFullDate.getTimezoneOffset() * 60000
  );

  return (
    <div className={classes.wrapperStyle}>
      {!isOwned && (
        <Typography
          variant="body2"
          color={isOwned ? "textSecondary" : "primary"}
          component="span"
        >
          {!price || price === 0
            ? "Free"
            : // : `${toFaDigit(price.toLocaleString())} Toman`}
              `${price.toLocaleString()} USD`}
        </Typography>
      )}

      {isOwned && currentMiliSecond <= webinarMiliSecond + durationMiliSecond && (
        <Button
          size="small"
          color="primary"
          variant="contained"
          component={Link}
          to={`/live/${slug}`}
          className={classes.actionBtn}
        >
          Login to the webinar
        </Button>
      )}
    </div>
  );
}

WebinarActionButtons.defaultProps = {
  isOwned: false,
  // moveBtnToRight: false,
};

WebinarActionButtons.propTypes = {
  slug: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isOwned: PropTypes.bool,
  // moveBtnToRight: PropTypes.bool,
};

export default WebinarActionButtons;
