import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  footerListItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.short,
    "&:hover": {
      paddingLeft: theme.spacing(2.5),
    },
    "&:hover span": {
      color: theme.palette.secondary.main,
    },
  },
  footerListItemLink: {
    padding: theme.spacing(0),
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  footerListItemText: {
    flexGrow: "unset",
    "& span": {
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.background.default,
      transition: `all ${theme.transitions.easing.easeInOut}`,
      transitionDuration: theme.transitions.duration.short,
    },
  },
  footerIconWrapper: {
    minWidth: theme.spacing(4),
  },
}));

function FooterListItem({ type, text, link, icon }) {
  const classes = useStyles();

  return (
    <>
      {type === "inner" && (
        <ListItem className={classes.footerListItem}>
          <ListItem
            component={Link}
            to={link}
            className={classes.footerListItemLink}
          >
            <ListItemText
              primary={text}
              className={classes.footerListItemText}
            />
          </ListItem>
        </ListItem>
      )}
      {type === "outer" && (
        <ListItem className={classes.footerListItem}>
          <ListItem
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footerListItemLink}
          >
            <ListItemText
              primary={text}
              className={classes.footerListItemText}
            />
          </ListItem>
        </ListItem>
      )}
      {type === "tel-email" && (
        <ListItem className={classes.footerListItem}>
          <ListItem
            component="a"
            href={link}
            className={classes.footerListItemLink}
          >
            {icon && (
              <ListItemIcon className={classes.footerIconWrapper}>
                {icon}
              </ListItemIcon>
            )}
            <ListItemText
              primary={text}
              className={classes.footerListItemText}
            />
          </ListItem>
        </ListItem>
      )}
    </>
  );
}
FooterListItem.defaultProps = {
  icon: null,
};

FooterListItem.propTypes = {
  type: PropTypes.oneOf(["inner", "outer", "tel-email"]).isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default FooterListItem;
