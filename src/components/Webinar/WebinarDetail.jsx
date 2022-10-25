import React, { useState, useEffect } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";

// @material-ui/icons
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import TimerIcon from "@material-ui/icons/Timer";

// react router
import { useHistory, useParams } from "react-router-dom";

// utils
import api from "utils/api";
import { toFaDigit } from "utils/commonUtils";

// components
import HelmetWrapper from "components/Homepage/HelmetWrapper";
import ResponseAlert from "components/Common/ResponseAlert";
import CustomDialog from "components/Common/CustomDialog";

// moment-jalaali
// import jMoment from "moment-jalaali";
import moment from "moment";

// moment-jalaali initiate
// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    marginBottom: "200px",
    backgroundColor: "#FFF",
    direction: "ltr",
  },
  galleryImgWrapper: {
    width: "100%",
    height: "auto",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  galleryImg: {
    width: "100%",
    maxWidth: "375px",
    height: "300px",
    objectFit: "contain",
  },
  mainTitle: {
    width: "100%",
    float: "left",
    textAlign: "left",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  contextCard: {
    boxShadow: "unset",
  },
  contextCardContent: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  contextTopIcon: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
    float: "left",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "& svg": {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(0.5),
    },
  },
  contextTopIconPrice: {
    fontSize: "24px",
  },
  paymentBtnWrapper: {
    display: "flex",
    flexDirection: "column",
    float: "left",
    marginBottom: theme.spacing(2),
  },
  paymentBtn: {
    color: "#fff",
    fontSize: "14px",
    padding: theme.spacing(1, 2),
    marginRight: theme.spacing(2),
    "&:hover": {
      textDecoration: "none",
    },
  },
  paymentIsOwned: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1.5),
  },
  paymentLogin: {
    color: "#fff",
  },
  paymentLoginNotNow: {
    color: theme.palette.text.secondary,
  },
  contextWrapperPaper: {
    marginTop: theme.spacing(2),
  },
  contextWrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    "& *": {
      fontFamily: `${theme.typography.fontFamily} !important`,
    },
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  contextP: {
    width: "100%",
    float: "right",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "justify",
    "& p": {
      color: theme.palette.text.secondary,
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.7,
      letterSpacing: "0.00938em",
    },
    "& iframe": {
      maxWidth: "100%",
    },
  },
  clr: {
    clear: "both",
    margin: "0 auto",
  },
}));

function WebinarDetail() {
  const [contentChapter, setContentChapter] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [openPaymentDialogLogin, setOpenPaymentDialogLogin] = useState(false);
  const [serverResponseType, setServerResponseType] = useState(null);
  const [serverResponse, setServerResponse] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwned, setIsOwned] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setContentChapter({});
    setIsLoading(true);

    api
      .getWebinar({
        urlParams: {
          id,
        },
      })
      .then((res) => {
        setContentChapter(res.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (user && contentChapter) {
      api
        .getPurchasedWebinar({
          params: { userId: user.userId, webinarId: contentChapter.webinarId },
        })
        .then((res) => {
          if (res.data.status === "OWNED") {
            setIsOwned(true);
          } else {
            setIsOwned(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, contentChapter]);

  const classes = useStyles();

  const handlePaymentDialogLoginOpen = () => {
    if (
      !localStorage.getItem("authToken") ||
      localStorage.getItem("isLecturer")
    ) {
      setOpenPaymentDialogLogin(true);
    } else {
      api
        .getUserToWebinar({
          urlParams: { id: contentChapter.webinarId, userId: user.userId },
        })
        .then(() => {
          history.push("/panel");
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            setServerResponseType("error");
            setServerResponse(err.response.data.message);
          }
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  };

  const handlePaymentDialogLoginClose = () => {
    setOpenPaymentDialogLogin(false);
  };

  return (
    <>
      <HelmetWrapper
        title={contentChapter.name}
        description={contentChapter.metaDescription}
        keyword={contentChapter.metaKeyword}
      />
      <Box component="main" className={classes.root}>
        <Box component="section">
          <Container maxWidth="lg">
            <Paper>
              <Grid container spacing={0}>
                <Grid item xs={12} md={4} lg={4}>
                  <div className={classes.galleryImgWrapper}>
                    <img
                      src={contentChapter.featuredImage}
                      alt={contentChapter.title}
                      className={classes.galleryImg}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={8} lg={8}>
                  <Card className={classes.contextCard}>
                    <CardContent className={classes.contextCardContent}>
                      <Typography
                        variant="h3"
                        component="h1"
                        className={classes.mainTitle}
                      >
                        {contentChapter.name}
                      </Typography>

                      {!isLoading && contentChapter.time && (
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.contextTopIcon}
                        >
                          <EventAvailableOutlinedIcon fontSize="small" />
                          {/* {`The date of the event: ${jMoment(
                            contentChapter.time
                          ).format("jDD jMMMM jYYYY The watch HH:mm")}`} */}
                          {`The date of the event: ${moment(
                            contentChapter.time
                          ).format("LLLL")}`}
                        </Typography>
                      )}

                      {!isLoading && contentChapter.duration && (
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.contextTopIcon}
                        >
                          <TimerIcon fontSize="small" />
                          {/* {`Time: ${toFaDigit(
                            contentChapter.duration
                          )} Minutes`} */}
                          {`Time: ${contentChapter.duration} Minutes`}
                        </Typography>
                      )}

                      {!isLoading && !!contentChapter.price && (
                        <Typography
                          variant="body2"
                          component="p"
                          className={`${classes.contextTopIcon} ${classes.contextTopIconPrice}`}
                        >
                          {/* {`${toFaDigit(
                            contentChapter.price.toLocaleString()
                          )} Toman`} */}
                          {`${contentChapter.price.toLocaleString()} USD`}
                        </Typography>
                      )}

                      <div className={classes.paymentBtnWrapper}>
                        {!isOwned && (
                          <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            // disabled={!!contentChapter.isOwned}
                            className={classes.paymentBtn}
                            onClick={handlePaymentDialogLoginOpen}
                          >
                            Buy
                          </Button>
                        )}

                        {isOwned && (
                          <>
                            <Typography
                              variant="body2"
                              component="p"
                              className={classes.paymentIsOwned}
                            >
                              (You have already purchased.)
                            </Typography>
                          </>
                        )}
                      </div>

                      <CustomDialog
                        message="To purchase the webinar, please log in as a normal user."
                        rejectBtnText="Now not"
                        acceptBtnText="Login/Membership"
                        open={openPaymentDialogLogin}
                        closeDialog={handlePaymentDialogLoginClose}
                        link={{
                          pathname: "/login",
                          state: { webinarSlugToBuy: id },
                        }}
                      />

                      <ResponseAlert
                        type={serverResponseType}
                        text={serverResponse}
                      />

                      <div className={classes.clr} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>

            <Paper className={classes.contextWrapperPaper}>
              {contentChapter.description && (
                <Grid item xs={12} className={classes.contextWrapper}>
                  <Typography
                    variant="body2"
                    component="div"
                    className={classes.contextP}
                    dangerouslySetInnerHTML={{
                      __html: contentChapter.description,
                    }}
                  />

                  <div className={classes.clr} />
                </Grid>
              )}
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default WebinarDetail;
