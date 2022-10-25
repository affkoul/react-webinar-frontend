import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

// components
import List from "components/Webinar/List";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    direction: "ltr",
  },
  container: {
    // paddingBottom: theme.spacing(0),
  },
  moreBtnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  moreBtn: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
  },
  featuresMainTitle: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
    padding: `0 ${theme.spacing(3)}px`,
  },
}));

function GoldWebinar({ title, articleChapterCount, isFeatured }) {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Typography
        variant="h2"
        component="h2"
        className={classes.featuresMainTitle}
      >
        {title}
      </Typography>
      <Box component="div">
        <Container maxWidth="lg" className={classes.container}>
          <List
            articleChapterCount={articleChapterCount}
            isFeatured={isFeatured}
            xsGrid={12}
            smGrid={6}
            mdGrid={3}
            lgGrid={3}
            tier={2} // gold
          />
        </Container>
      </Box>
    </Box>
  );
}

GoldWebinar.defaultProps = {
  isFeatured: false,
};

GoldWebinar.propTypes = {
  title: PropTypes.string.isRequired,
  articleChapterCount: PropTypes.number.isRequired,
  isFeatured: PropTypes.bool,
};

export default GoldWebinar;
