/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// utils
import api from "utils/api";

// components
import ListItem from "components/Webinar/WebinarListItem";

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
  pagination: {
    padding: theme.spacing(1),
    "& ul": {
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        "& button": {
          height: "26px",
          margin: "0 1px",
          padding: "0 4px",
          minWidth: "26px",
          borderRadius: "13px",
        },
      },
    },
  },
}));

function List({
  articleChapterCount,
  isFeatured,
  xsGrid,
  smGrid,
  mdGrid,
  lgGrid,
  contentCategory,
  tier,
}) {
  const classes = useStyles();

  const [webinarList, setWebinarList] = useState([]);

  useEffect(() => {
    if (tier) {
      api
        .getWebinarByTier({ urlParams: { id: tier } })
        .then((res) => {
          if (isFeatured) {
            setWebinarList(res.data.slice(0, articleChapterCount));
          } else {
            console.log("content category", contentCategory);
            setWebinarList(
              contentCategory
                ? res.data.filter(
                    (webinar) =>
                      parseInt(webinar.category, 10) === contentCategory
                  )
                : res.data
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .getAllWebinar()
        .then((res) => {
          if (isFeatured) {
            setWebinarList(res.data.slice(0, articleChapterCount));
          } else {
            console.log("content category", contentCategory);
            setWebinarList(
              contentCategory
                ? res.data.filter(
                    (webinar) =>
                      parseInt(webinar.category, 10) === contentCategory
                  )
                : res.data
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [articleChapterCount, isFeatured, contentCategory, tier]);

  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
      {webinarList.map((row) => (
        <Grid
          item
          xs={xsGrid}
          sm={smGrid}
          md={mdGrid}
          lg={lgGrid}
          key={row.webinarId}
          className={classes.artWrapper}
        >
          <ListItem
            id={row.webinarId}
            title={row.name}
            featuredImage={row.featuredImage}
            brief={row.description}
            time={row.time}
            duration={row.duration}
            type={row.type}
            price={row.price}
            isOwned={row.isOwned}
            tier={row.tier}
          />
        </Grid>
      ))}
    </Grid>
  );
}

List.defaultProps = {
  isFeatured: false,
  articleChapterCount: undefined,
  contentCategory: null,
  tier: null,
};

List.propTypes = {
  articleChapterCount: PropTypes.number,
  isFeatured: PropTypes.bool,
  xsGrid: PropTypes.number.isRequired,
  smGrid: PropTypes.number.isRequired,
  mdGrid: PropTypes.number.isRequired,
  lgGrid: PropTypes.number.isRequired,
  contentCategory: PropTypes.number,
  tier: PropTypes.number,
};

export default List;
