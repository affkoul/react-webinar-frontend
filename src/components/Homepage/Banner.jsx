import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

// components
import BannerSlider from "components/Homepage/BannerSlider";

const useStyles = makeStyles(() => ({
  root: {
    height: "60vh",
    maxHeight: "1024px",
    backgroundColor: "#F2F2F2",
    overflow: "hidden",
    marginTop: "80px",
    direction: "ltr",
  },
  banner: {
    padding: 0,
    height: "100%",
    maxHeight: "1024px",
    position: "relative",
  },
  bannerContentWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "red",
    height: "50vh",
    padding: 0,
    maxHeight: "500px",
  },
  container: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="xl" className={classes.banner}>
        <BannerSlider />
      </Container>
    </Box>
  );
}

export default Banner;
