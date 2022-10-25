import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

// components
import LecturerListItem from "components/Panel/LecturerListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    // borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    direction: "ltr",
  },
  artWrapper: {
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.short,
    zIndex: "1",
    "&:hover": {
      boxShadow: theme.shadows[3],
      zIndex: "10",
    },
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

function WebinarList({ catBook, xsGrid, smGrid, mdGrid, lgGrid }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/requestwebinar"
        className={classes.button}
      >
        Webinar request
      </Button>
      {catBook.map((row) => (
        <Grid
          item
          xs={xsGrid}
          sm={smGrid}
          md={mdGrid}
          lg={lgGrid}
          key={row._id}
          className={classes.artWrapper}
        >
          <LecturerListItem
            id={row.webinarId}
            title={row.name}
            featuredImage={row.featuredImage}
            isAccepted={row.isAccepted}
            video={row.video}
            file={row.file}
          />
        </Grid>
      ))}
    </Grid>
  );
}
WebinarList.defaultProps = {
  catBook: [],
};

WebinarList.propTypes = {
  xsGrid: PropTypes.number.isRequired,
  smGrid: PropTypes.number.isRequired,
  mdGrid: PropTypes.number.isRequired,
  lgGrid: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  catBook: PropTypes.array,
};

export default WebinarList;
