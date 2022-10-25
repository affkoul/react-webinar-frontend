import React, { useEffect, useState } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography, Button } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

// components
import WebinarForm from "components/Webinar/WebinarForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    marginBottom: "200px",
    backgroundColor: "#FFF",
    padding: `0 ${theme.spacing(3)}px`,
    direction: "ltr",
  },
  featuresMainTitle: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
  },
  text: {},
  textRequest: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}));

function RequestWebinar() {
  const classes = useStyles();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("authToken") &&
      localStorage.getItem("isLecturer")
    ) {
      setIsLogged(true);
    }
  }, []);

  return (
    <Box component="section" className={classes.root}>
      <Box component="div">
        <Container maxWidth="lg" className={classes.container}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.featuresMainTitle}
          >
            Webinar Request
          </Typography>

          <Typography variant="body1" component="p" className={classes.text}>
            You can request a webinar by filling out the form below. So From the
            reviews of the system admin, the result of the request via e-mail to
            You will be notified.{" "}
          </Typography>
          {isLogged ? (
            <WebinarForm />
          ) : (
            <>
              <Typography
                variant="body1"
                component="p"
                className={classes.textRequest}
              >
                In order to apply for the webinar, please create an account
                Create a speaker and log in with it
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/register"
              >
                Speaker registration
              </Button>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default RequestWebinar;
