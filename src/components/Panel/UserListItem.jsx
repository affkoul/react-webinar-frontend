import React, { useState } from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link as MuiLink,
} from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

// components
import CustomDialogVideoPlay from "components/Common/CustomDialogVideoPlay";

// moment-jalaali
// import jMoment from "moment-jalaali";

// moment-jalaali initiate
// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    marginBottom: "-1px",
    marginRight: "-1px",
    boxShadow: theme.shadows[0],
    borderRadius: "0px",
    "&:hover h3": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cardAction: {
    width: `auto !important`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    "&:hover .MuiCardActionArea-focusHighlight": {
      opacity: "0",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  cardImg: {
    width: "100px",
    padding: theme.spacing(2),
    objectFit: "contain",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    // paddingBottom: `${theme.spacing(2)}px !important`,
    paddingLeft: `${theme.spacing(0)}px !important`,
  },
  cardTitle: {
    display: "flex",
    alignItems: "center",
    height: "52.8px",
    textAlign: "justify",
    marginBottom: theme.spacing(0),
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.shorter,
    "& > span": {
      display: "block",
      width: "100%",
      maxHeight: "100%",
    },
  },
  wrapperStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),

    "& button": {
      // fontSize: '12px',
      marginLeft: "0px !important",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    "& a": {
      // fontSize: '12px',
      marginLeft: "0px !important",
    },
  },

  actionBtn: {
    color: "#fff",
    width: theme.spacing(11.5),
  },
  actionBtnUpload: {
    color: theme.palette.primary.main,
  },
  actionBtnRemove: {
    color: theme.palette.error.main,
  },
  fileInput: {
    display: "none",
  },
  status: {
    marginLeft: theme.spacing(1),
  },
  accept: {
    color: theme.palette.success.main,
  },
  reject: {
    color: theme.palette.error.main,
  },
}));

function UserListItem({ id, title, featuredImage, link, file, video }) {
  const [isOpenVideoPreview, setIsOpenVideoPreview] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const classes = useStyles();

  console.log(link, file, video);

  const handleVideoPreview = () => {
    setIsOpenVideoPreview(true);
    setVideoPreviewUrl(video);
  };

  return (
    <>
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
            height="100"
            // image={featuredImage ? `${featuredImage}/68x68` : null}
            image={featuredImage ? `${featuredImage}` : null}
            title={title}
            className={classes.cardImg}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              className={classes.cardTitle}
            >
              <span>{title}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.wrapperStyle}>
          {link && (
            <Button
              size="small"
              color="secondary"
              variant="contained"
              component={MuiLink}
              href={link}
              download
              target="_blank"
              className={classes.actionBtn}
            >
              Class link
            </Button>
          )}
          {video && (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={handleVideoPreview}
              className={classes.actionBtn}
            >
              Show video
            </Button>
          )}

          {file && (
            <Button
              size="small"
              color="primary"
              variant="contained"
              component={MuiLink}
              href={file}
              download
              target="_blank"
              className={classes.actionBtn}
            >
              Show Files
            </Button>
          )}
        </CardActions>
      </Card>

      <CustomDialogVideoPlay
        open={isOpenVideoPreview}
        setIsOpenVideoPreview={setIsOpenVideoPreview}
        videoPreviewUrl={videoPreviewUrl}
        setVideoPreviewUrl={setVideoPreviewUrl}
      />
    </>
  );
}

UserListItem.defaultProps = {
  featuredImage: "",
  link: "",
  file: "",
  video: "",
};

UserListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  link: PropTypes.string,
  file: PropTypes.string,
  video: PropTypes.string,
};

export default UserListItem;
