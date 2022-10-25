import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  iconWrapperLink: {
    width: "40px",
    height: "40px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    backgroundColor: theme.palette.secondary.main,
    "& svg": {
      color: theme.palette.tertiary.main,
      fontSize: "25px",
    },
  },
  iconWrapper: {
    width: "80px",
    height: "80px",
    borderRadius: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up("xl")]: {
      width: "80px",
      height: "80px",
      borderRadius: "80px",
    },
    [theme.breakpoints.down("md")]: {
      width: "60px",
      height: "60px",
      borderRadius: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
      borderRadius: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
      borderRadius: "40px",
    },
    "& svg": {
      color: theme.palette.tertiary.main,
      fontSize: "35px",
    },
  },
}));

function CircleIcon({ icon, styleCircle, link }) {
  const classes = useStyles();

  return link ? (
    <Box component="a" href={link} target="_blank" rel="noopener noreferrer">
      <Box
        component="div"
        className={`${classes.iconWrapperLink} ${styleCircle}`}
      >
        {icon}
      </Box>
    </Box>
  ) : (
    <Box component="div">
      <Container className={classes.container}>
        <Box
          component="div"
          className={`${classes.iconWrapper} ${styleCircle}`}
        >
          {icon}
        </Box>
      </Container>
    </Box>
  );
}
CircleIcon.defaultProps = {
  styleCircle: null,
  link: null,
};

CircleIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  styleCircle: PropTypes.string,
  link: PropTypes.string,
};

export default CircleIcon;
