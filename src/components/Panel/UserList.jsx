import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// components
import UserListItem from "components/Panel/UserListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
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
}));

function UserList({ catBook, xsGrid, smGrid, mdGrid, lgGrid }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
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
          <UserListItem
            id={row.webinarId}
            title={row.name}
            featuredImage={row.featuredImage}
            brief={row.description}
            time={row.time}
            duration={row.duration}
            type={row.type}
            price={row.price}
            link={row.link}
            file={row.file}
            video={row.video}
            isOwned={row.isOwned}
          />
        </Grid>
      ))}
    </Grid>
  );
}
UserList.defaultProps = {
  catBook: [],
};

UserList.propTypes = {
  xsGrid: PropTypes.number.isRequired,
  smGrid: PropTypes.number.isRequired,
  mdGrid: PropTypes.number.isRequired,
  lgGrid: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  catBook: PropTypes.array,
};

export default UserList;
