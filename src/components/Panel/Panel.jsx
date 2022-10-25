import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";

// components
import HelmetWrapper from "components/Homepage/HelmetWrapper";
import UserAside from "components/Panel/PanelAside";
import UserList from "components/Panel/UserList";
import LecturerList from "components/Panel/LecturerList";

// utils
import api from "utils/api";

const useStyles = makeStyles({
  root: {
    marginTop: "200px",
    marginBottom: "200px",
    direction: "ltr",
  },
});

function Panel({ setAuthToken }) {
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [isLecturer, setIsLecturer] = useState(false);
  const [catBook, setCatBook] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(10);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      api
        .getUserInfo()
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          api
            .getLecturerInfo()
            .then((res) => {
              setUser(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isLecturer")) {
      setIsLecturer(true);
    }
  }, []);

  useEffect(() => {
    if (user && !isLecturer) {
      api
        .getUserWebinars({ params: { userId: user.userId } })
        .then((res) => {
          setCatBook(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (user && isLecturer) {
      api
        .getLecturerWebinars({ params: { lecturerId: user.lecturerId } })
        .then((res) => {
          setCatBook(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, isLecturer]);

  return (
    <>
      <HelmetWrapper
        title="User area"
        description="User area in the webinar system Webinar holding system"
        keyword="User area in the webinar system Webinar holding system"
      />
      <Box component="main" className={classes.root}>
        <Box component="section">
          <Container maxWidth="lg">
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <UserAside
                  setAuthToken={setAuthToken}
                  user={user}
                  isLecturer={isLecturer}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                {isLecturer ? (
                  <LecturerList
                    catBook={catBook}
                    xsGrid={12}
                    smGrid={12}
                    mdGrid={12}
                    lgGrid={12}
                  />
                ) : (
                  <UserList
                    catBook={catBook}
                    xsGrid={12}
                    smGrid={12}
                    mdGrid={12}
                    lgGrid={12}
                  />
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

Panel.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
};

export default Panel;
