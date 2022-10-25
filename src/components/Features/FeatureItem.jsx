import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

// components
import CircleIcon from "components/Common/CircleIcon";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  card: {
    textAlign: "center",
    boxShadow: theme.shadows[0],
    backgroundColor: "transparent",
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.shortest,
    borderBottom: `5px solid transparent`,
    "&:hover": {
      boxShadow: theme.shadows[5],
      borderBottomColor: theme.palette.primary.main,
    },
  },
  cardText: {
    minHeight: "40px",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    fontWeight: "300",
  },
}));

function FeatureItem({ text, icon }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <CircleIcon icon={icon} />

        <Typography variant="body1" component="p" className={classes.cardText}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

FeatureItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureItem;
