import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link as MuiLink } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  linkStyle: {
    textDecoration: "none !important",
    padding: "0 20px",
    paddingTop: "5px",
    color: theme.palette.primary.main,
    fontWeight: "medium",
  },
  menuLinkScrolled: {
    height: "70px",
    color: theme.palette.primary.main,

    "&:hover > span": {
      transform: "translate(0, -3px)",
      textShadow: "1px 3px 2px #ddd",
    },
  },

  listItems: {
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.shortest,
    color: ({ selected }) => (selected ? theme.palette.secondary.main : ""),
    borderBottom: ({ selected }) =>
      selected ? `2px solid ${theme.palette.secondary.main}` : "none",

    "&:hover": {
      color: theme.palette.secondary.main,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    "&:hover > span": {
      transform: "translate(0, -3px)",
      textShadow: "1px 3px 3px #333",
    },
  },
}));
function HeaderMenuItem({ type, text, link, menuStyle, selected }) {
  const classes = useStyles({ selected });

  return type === "inner" ? (
    <li>
      <Link
        to={link}
        className={
          menuStyle === "menuTop"
            ? classes.linkStyle
            : `${classes.linkStyle} ${classes.menuLinkScrolled}`
        }
      >
        <Typography
          variant="subtitle1"
          component="span"
          className={classes.listItems}
        >
          {text}
        </Typography>
      </Link>
    </li>
  ) : (
    <li>
      <MuiLink
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={
          menuStyle === "menuTop"
            ? classes.linkStyle
            : `${classes.linkStyle} ${classes.menuLinkScrolled}`
        }
      >
        <Typography
          variant="subtitle1"
          component="span"
          className={classes.listItems}
        >
          {text}
        </Typography>
      </MuiLink>
    </li>
  );
}

HeaderMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  menuStyle: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default HeaderMenuItem;
