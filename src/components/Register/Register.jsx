import React, { useState } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

// react router
import { useHistory } from "react-router-dom";
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

function Register() {
  const classes = useStyles();
  const history = useHistory();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("user");
  // const [isLogged, setIsLogged] = useState(false)
  const [serverResponseType, setServerResponseType] = useState(null);
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "user") {
      api
        .postUser({
          data: {
            name: fullname,
            username,
            password,
            email,
            phoneNumber,
          },
        })
        .then(() => {
          setServerResponseType("success");
          setServerResponse("You have successfully registered");
          history.push("/login");
        })
        .catch((err) => {
          setServerResponseType("error");
          setServerResponse(err.response.data.message);
        });
    } else {
      api
        .postLecturer({
          data: {
            name: fullname,
            username,
            password,
            email,
            phoneNumber,
          },
        })
        .then(() => {
          setServerResponseType("success");
          setServerResponse("You have successfully registered");
          history.push("/login");
        })
        .catch((err) => {
          setServerResponseType("error");
          setServerResponse(err.response.data.message);
        });
    }
  };

  const handleChange = (event) => {
    setType(event.target.value);
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
            Membership
          </Typography>
          <Box component="section">
            <Container maxWidth="lg">
              <Paper className={classes.loginOuterWrapper}>
                <div className={classes.loginInnerWrapper}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      required
                      id="fullname"
                      name="fullname"
                      label="name"
                      type="fullname"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      autoFocus
                      onChange={(event) => {
                        setFullname(event.target.value);
                      }}
                      value={fullname}
                    />

                    <TextField
                      required
                      id="username"
                      name="username"
                      label="user name"
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
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      type="phoneNumber"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      autoFocus
                      onChange={(event) => {
                        setPhoneNumber(event.target.value);
                      }}
                      value={phoneNumber}
                    />

                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      autoFocus
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      value={email}
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
                    <RadioGroup
                      aria-label="gender"
                      name="type"
                      value={type}
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value="user"
                        control={<Radio />}
                        label="Normal user"
                      />
                      <FormControlLabel
                        value="lecturer"
                        control={<Radio />}
                        label="The speaker"
                      />
                    </RadioGroup>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.formSubmitBtn}
                    >
                      Register
                    </Button>
                  </form>

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

export default Register;
