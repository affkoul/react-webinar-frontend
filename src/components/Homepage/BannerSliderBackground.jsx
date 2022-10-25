import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  container: {
    width: "100%",
    height: "100%",
  },
  backgroundStyle: ({ imageBackground }) => ({
    backgroundImage: `url("${imageBackground}")`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    maxHeight: "1024px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  }),
  backgroundOverlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(255,255,255,0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "3",
  },
  title: {
    color: theme.palette.tertiary.main,
    textShadow: "0px 2px 2px #666",
  },
  button: {
    color: theme.palette.tertiary.main,
    marginTop: theme.spacing(3),
  },
}));

function BannerSliderBackground({ imageBackground, title }) {
  const classes = useStyles({ imageBackground });

  return (
    <div className={classes.container}>
      <div className={classes.backgroundStyle}>
        <Typography component="span" variant="h2" className={classes.title}>
          {title}
        </Typography>
      </div>
      <div className={classes.backgroundOverlay} />
    </div>
  );
}
BannerSliderBackground.propTypes = {
  imageBackground: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BannerSliderBackground;
