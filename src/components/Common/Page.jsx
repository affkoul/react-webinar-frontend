import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "10",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#F5F5F5",
    direction: "ltr",
  },
  headerFake: {
    height: "80px",
  },
}));

function Page({ children }) {
  const classes = useStyles();

  return (
    <Box component="main">
      <Box component="section" className={classes.root}>
        <Box component="div" className={classes.headerFake} />
        {children}
      </Box>
    </Box>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export default Page;
