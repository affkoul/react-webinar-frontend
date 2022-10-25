import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@material-ui/core";

// @material-ui/icons
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import TimerIcon from "@material-ui/icons/Timer";

// react router
import { Link } from "react-router-dom";

// components
import WebinarActionButtons from "components/Webinar/WebinarActionButtons";

// utils
import { toFaDigit, getWebinarTier } from "utils/commonUtils";

// moment-jalaali
// import jMoment from "moment-jalaali";
// import MomentUtils from "@date-io/moment";
// import "moment/locale/en-au";
import moment from "moment";

// moment-jalaali initiate
// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    marginBottom: "-1px",
    marginRight: "-1px",
    boxShadow: theme.shadows[0],
    borderRadius: "0px",
    "&:hover h3": {
      color: theme.palette.primary.main,
    },
    height: "550px",
  },
  cardAction: {
    "&:hover .MuiCardActionArea-focusHighlight": {
      opacity: "0",
    },
  },
  artImg: {
    padding: theme.spacing(2),
    objectFit: "contain",
  },
  artTitle: {
    minHeight: "52.8px",
    textAlign: "justify",
    marginBottom: theme.spacing(1.5),
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.shorter,
  },
  artTitleCaption: {
    marginLeft: theme.spacing(1),
  },
  launchTime: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(0.75),
    "& > span": {
      display: "flex",
      alignItems: "center",
      "& > svg": {
        fontSize: "14px",
      },
      "&:first-child > svg": {
        marginRight: theme.spacing(0.5),
      },
      "&:last-child > svg": {
        marginLeft: theme.spacing(0.5),
      },
    },
  },
  artBrief: {
    minHeight: "64px",
    textAlign: "justify",
  },
  comparison: {
    padding: "0",
    margin: "0",
    overflow: "hidden",
  },
  wrapperStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "46px",
  },
  actionBtn: {
    color: "#fff",
  },

  tier4: {
    backgroundColor: "#673ab7",
    color: "white",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  tier3: {
    backgroundColor: "#ff5722",
    color: "white",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  tier1: {
    backgroundColor: "#607d8b",
    color: "white",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  tier2: {
    backgroundColor: "#FFD700",
    color: "white",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
}));

function WebinarListItem({
  id,
  title,
  featuredImage,
  brief,
  time,
  duration,
  type,
  price,
  isOwned,
  tier,
}) {
  const classes = useStyles();

  return (
    <Card component="article" className={classes.root}>
      <CardActionArea
        component={Link}
        to={{
          pathname: `/webinar/${id}`,
          state: { id },
        }}
        className={classes.cardAction}
      >
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={featuredImage}
          title={title}
          className={classes.artImg}
        />
        <CardContent>
          <Chip
            label={getWebinarTier(tier)}
            color="secondary"
            className={tier && classes[`tier${tier}`]}
          />
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className={classes.artTitle}
          >
            {title}
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              className={classes.artTitleCaption}
            >
              {`${type === "2" ? "(Pre-recorded)" : "(Online webinar)"}`}
            </Typography>
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.launchTime}
          >
            <span>
              <EventAvailableOutlinedIcon />
              {moment(time).format("LLLL")}{" "}
            </span>
            <span>
              {/* {toFaDigit(duration)} Minutes <TimerIcon /> */}
              {duration} Minutes <TimerIcon />
            </span>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.artBrief}
            dangerouslySetInnerHTML={{
              __html: brief,
            }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.wrapperStyle}>
        <WebinarActionButtons
          time={time}
          duration={duration}
          type={type}
          price={price}
          isOwned={isOwned}
        />
      </CardActions>
    </Card>
  );
}

WebinarListItem.defaultProps = {
  brief: "",
  type: "1",
  isOwned: false,
};

WebinarListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  brief: PropTypes.string,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  type: PropTypes.string,
  price: PropTypes.number.isRequired,
  isOwned: PropTypes.bool,
  tier: PropTypes.number.isRequired,
};

export default WebinarListItem;
