import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    float: "left",
    marginTop: theme.spacing(3),
    direction: "ltr",
  },
  container: {
    position: "relative",
    marginBottom: theme.spacing(3),
  },

  mainTitle: {
    color: theme.palette.tertiary.main,
    paddingTop: `${theme.spacing(1)}px`,
    textAlign: ({ center }) => (center ? "center" : "right"),
    borderTop: "none",
    borderBottom: "none",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center !important",
      minWidth: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center !important",
    },
  },
  clr: {
    clear: "both",
    margin: "0 auto",
  },
}));

function Title({ text, center, ...other }) {
  const classes = useStyles({ center });

  return (
    <Box component="div">
      <Box component="div" className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.mainTitle}
            {...other}
          >
            {text}
          </Typography>
        </Container>
      </Box>
      <div className={classes.clr} />
    </Box>
  );
}

Title.defaultProps = {
  center: false,
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

export default Title;
