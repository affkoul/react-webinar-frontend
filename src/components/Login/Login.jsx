import React, { useState } from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

// @material-ui/icons
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// react router
import { Link } from "react-router-dom";

// utils
import api from "utils/api";

// components
import HelmetWrapper from "components/Homepage/HelmetWrapper";
import ResponseAlert from "components/Common/ResponseAlert";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    direction: "ltr",
  },
  loginOuterWrapper: {},
  loginInnerWrapper: {
    width: "400px",
    maxWidth: "100%",
    margin: "0 auto",
    padding: theme.spacing(8, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formSubmitBtn: {
    color: "#fff",
    margin: theme.spacing(2, 0),
  },
  ChangeLoginSignup: {
    cursor: "pointer",
    marginBottom: theme.spacing(2),
    color: theme.palette.info.dark,
    // '&:hover': {
    //   color: theme.palette.info.dark,
    // },
  },
  featuresMainTitle: {
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  registerLinkStyle: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

function Login({ setAuthToken }) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isLogged, setIsLogged] = useState(false)
  const [serverResponseType, setServerResponseType] = useState(null);
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .postLoginUser({
        data: {
          username,
          password,
        },
      })
      .then((res) => {
        setServerResponseType("success");
        setServerResponse("welcome");
        console.log(res.data.token);
        localStorage.setItem("authToken", res.data.token);
        setAuthToken(res.data.token);
      })
      .catch(() => {
        api
          .postLoginLecturer({
            data: {
              username,
              password,
            },
          })
          .then((res) => {
            setServerResponseType("success");
            setServerResponse("welcome");
            console.log(res.data.token);
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("isLecturer", true);
            setAuthToken(res.data.token);
          })
          .catch((err) => {
            setServerResponseType("error");
            setServerResponse(err.response.data.message);
          });
      });
  };

  return (
    <>
      <HelmetWrapper
        title="Login - Membership"
        description="Log in - join the webinar system Webinar holding system"
        keyword="Log in - join the webinar system Webinar holding system"
      />
      <Box component="main" className={classes.root}>
        <Box component="section">
          <Typography
            variant="h2"
            component="h2"
            className={classes.featuresMainTitle}
          >
            Login / Membership
          </Typography>
          <Box component="section">
            <Container maxWidth="lg">
              <Paper className={classes.loginOuterWrapper}>
                <div className={classes.loginInnerWrapper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      required
                      id="username"
                      name="username"
                      label="Username"
                      type="username"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      autoFocus
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                      value={username}
                    />
                    <TextField
                      required
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      autoFocus
                      security
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      value={password}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.formSubmitBtn}
                    >
                      log in
                    </Button>
                  </form>

                  <Typography
                    variant="body1"
                    component={Link}
                    to="/register"
                    className={classes.registerLinkStyle}
                  >
                    Join Us!
                  </Typography>
                  <ResponseAlert
                    type={serverResponseType}
                    text={serverResponse}
                  />
                </div>
              </Paper>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
Login.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
};

export default Login;
