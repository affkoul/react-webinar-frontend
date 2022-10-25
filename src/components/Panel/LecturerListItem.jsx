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
  Box,
  Link as MuiLink,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListSubheader,
} from "@material-ui/core";

// @material-ui/icons
import PeopleIcon from "@material-ui/icons/People";
import EditIcon from "@material-ui/icons/Edit";

// react router
import { Link } from "react-router-dom";

// components
import CustomDialogVideoPlay from "components/Common/CustomDialogVideoPlay";
import DialogCustom from "components/Common/DialogCustom";
import DialogEditWebinar from "components/Common/DialogEditWebinar";

// utils
import api from "utils/api";

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
      marginLeft: theme.spacing(2),
    },
  },
  wrapperVideoStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  wrapperFileStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginLeft: "0px !important",
    width: "100%",
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

function LecturerListItem({
  id,
  title,
  featuredImage,
  video,
  file,
  isAccepted,
}) {
  const [isOpenVideoPreview, setIsOpenVideoPreview] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [openModalUsers, setOpenModalUsers] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [webinarUsers, setWebinarUsers] = useState([]);
  const classes = useStyles();

  const postUploadVideo = (b64Video) => {
    api
      .postUploadVideo({ data: { video: b64Video } })
      .then((res) => {
        setUploadedVideo(res.data);
        api
          .patchPostWebinar({
            urlParams: { id },
            data: {
              video: res.data,
            },
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          console.log(err.response);
        }
      });
  };

  const handleVideoChange = (e) => {
    e.preventDefault();
    const reader = new window.FileReader();
    const filetarget = e.target.files[0];
    reader.onloadend = () => {
      postUploadVideo(reader.result);
    };
    if (filetarget) {
      reader.readAsDataURL(filetarget);
    }
  };

  const handleDeleteVideo = () => {
    api
      .patchPostWebinar({
        urlParams: { id },
        data: {
          video: "",
        },
      })
      .then((result) => {
        window.location.reload();
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const postFileVideo = (b64File) => {
    api
      .postUploadFile({ data: { file: b64File } })
      .then((res) => {
        setUploadedFile(res.data);
        api
          .patchPostWebinar({
            urlParams: { id },
            data: {
              file: res.data,
            },
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          console.log(err.response);
        }
      });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const reader = new window.FileReader();
    const filetarget = e.target.files[0];
    reader.onloadend = () => {
      postFileVideo(reader.result);
    };
    if (filetarget) {
      reader.readAsDataURL(filetarget);
    }
  };

  const handleDeleteFile = () => {
    api
      .patchPostWebinar({
        urlParams: { id },
        data: {
          file: "",
        },
      })
      .then((result) => {
        window.location.reload();
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVideoPreview = () => {
    setIsOpenVideoPreview(true);
    setVideoPreviewUrl(video || uploadedVideo);
  };
  const handleOpenPeople = (event) => {
    event.preventDefault();
    setOpenModalUsers(true);
    api
      .getWebinarUsers({ urlParams: { id } })
      .then((res) => {
        setWebinarUsers(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenEdit = (event) => {
    event.preventDefault();
    setOpenModalEdit(true);
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
          <CardContent>
            <Box className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h6"
                component="h3"
                className={classes.cardTitle}
              >
                <span>{title}</span>
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={`${classes.status} ${
                  isAccepted ? classes.accept : classes.reject
                }`}
              >
                <span>{isAccepted ? "(confirmed)" : "(Unspecified)"}</span>
              </Typography>
            </Box>

            <IconButton onClick={(event) => handleOpenPeople(event)}>
              <PeopleIcon color="primary" />
            </IconButton>
            <IconButton onClick={(event) => handleOpenEdit(event)}>
              <EditIcon color="primary" />
            </IconButton>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.wrapperStyle}>
          <Box className={classes.wrapperVideoStyle}>
            {video || uploadedVideo ? (
              <>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={handleVideoPreview}
                  className={classes.actionBtn}
                >
                  Show video
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={handleDeleteVideo}
                  className={`${classes.actionBtn} ${classes.actionBtnRemove}`}
                >
                  Delete
                </Button>
              </>
            ) : (
              <label htmlFor="video-file-input">
                <Button
                  component="span"
                  size="small"
                  color="primary"
                  variant="outlined"
                >
                  Upload video
                </Button>
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  id="video-file-input"
                  onChange={handleVideoChange}
                  className={classes.fileInput}
                />
              </label>
            )}
          </Box>

          <Box className={classes.wrapperFileStyle}>
            {file || uploadedFile ? (
              <>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  component={MuiLink}
                  href={file || uploadedFile}
                  download
                  target="_blank"
                >
                  Show Files
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={handleDeleteFile}
                  className={`${classes.actionBtn} ${classes.actionBtnRemove}`}
                >
                  Delete
                </Button>
              </>
            ) : (
              <label htmlFor="file-input-pdf">
                <Button
                  component="span"
                  size="small"
                  color="primary"
                  variant="outlined"
                >
                  File upload
                </Button>
                <input
                  type="file"
                  accept="application/pdf"
                  id="file-input-pdf"
                  onChange={handleFileChange}
                  className={classes.fileInput}
                />
              </label>
            )}
          </Box>
        </CardActions>
      </Card>

      <CustomDialogVideoPlay
        open={isOpenVideoPreview}
        setIsOpenVideoPreview={setIsOpenVideoPreview}
        videoPreviewUrl={videoPreviewUrl}
        setVideoPreviewUrl={setVideoPreviewUrl}
      />
      <DialogCustom open={openModalUsers} setIsOpen={setOpenModalUsers}>
        <List
          subheader={
            <ListSubheader component="h3" id="nested-list-subheader">
              List of webinar users
            </ListSubheader>
          }
        >
          {webinarUsers.map((webinarUser) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={webinarUser.name}
                secondary={webinarUser.email}
              />
            </ListItem>
          ))}
        </List>
      </DialogCustom>
      <DialogEditWebinar
        open={openModalEdit}
        setIsOpen={setOpenModalEdit}
        id={id}
      />
    </>
  );
}

LecturerListItem.defaultProps = {
  featuredImage: "",
  video: "",
  file: "",
  isAccepted: 0,
};

LecturerListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  video: PropTypes.string,
  file: PropTypes.string,
  isAccepted: PropTypes.number,
};

export default LecturerListItem;
