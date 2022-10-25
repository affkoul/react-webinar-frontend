import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

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

function FeaturedWebinar({
  title,
  contentType,
  articleChapterCount,
  isSuggestedContents,
  suggestedContents,
  isLoadingSuggested,
  skeletonListItemCounts,
  isFeatured,
  pageable,
  pageCount,
  moreBtn,
  moreBtnLink,
}) {
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
            contentType={contentType}
            isSuggestedContents={isSuggestedContents}
            suggestedContents={suggestedContents}
            isLoadingSuggested={isLoadingSuggested}
            articleChapterCount={articleChapterCount}
            skeletonListItemCounts={skeletonListItemCounts}
            isFeatured={isFeatured}
            pageable={pageable}
            pageCount={pageCount}
            xsGrid={12}
            smGrid={6}
            mdGrid={3}
            lgGrid={3}
          />

          {moreBtn && (
            <div className={classes.moreBtnWrapper}>
              <Typography
                variant="body2"
                component={Link}
                to={moreBtnLink}
                className={classes.moreBtn}
              >
                More items
              </Typography>
            </div>
          )}
        </Container>
      </Box>
    </Box>
  );
}

FeaturedWebinar.defaultProps = {
  isSuggestedContents: false,
  suggestedContents: [],
  isLoadingSuggested: false,
  skeletonListItemCounts: [0, 1, 2, 3, 4, 5],
  isFeatured: false,
  pageable: false,
  pageCount: null,
  moreBtn: false,
  moreBtnLink: false,
};

FeaturedWebinar.propTypes = {
  title: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  articleChapterCount: PropTypes.number.isRequired,
  isSuggestedContents: PropTypes.bool,
  suggestedContents: PropTypes.arrayOf(PropTypes.object),
  isLoadingSuggested: PropTypes.bool,
  skeletonListItemCounts: PropTypes.arrayOf(PropTypes.number),
  isFeatured: PropTypes.bool,
  pageable: PropTypes.bool,
  pageCount: PropTypes.number,
  moreBtn: PropTypes.bool,
  moreBtnLink: PropTypes.string,
};

export default FeaturedWebinar;
