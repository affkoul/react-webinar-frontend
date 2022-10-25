import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
} from "@material-ui/core";

// react router
import { useLocation, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    direction: "ltr",
  },
  topInfo: {
    textAlign: "center",
  },
  divider: {
    borderBottom: "1px solid #cdcdcd",
  },
  expandIconWrapper: {
    minWidth: "unset",
    margin: theme.spacing(-1.5),
  },
  firstChild: {
    backgroundColor: "#eee",
  },
  nestedChild: {
    paddingLeft: theme.spacing(5),
  },
  nestedGrandChild: {
    paddingLeft: theme.spacing(8),
  },
  parentText: {
    "& span": {
      fontSize: "15px",
    },
  },
  childText: {
    "& span": {
      fontSize: "15px",
    },
  },
  grandChildText: {
    "& span": {
      fontSize: "14px",
      color: theme.palette.text.secondary,
    },
  },
}));

function MobileMenuItem({ setMenuDrawer }) {
  const { pathname } = useLocation();
  const classes = useStyles();

  const urlFirstPart = pathname.slice(1).split("/")[0];

  return (
    <>
      <List
        component="div"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.topInfo}
          >
            Ndolet Webinars
            <div className={classes.divider} />
          </ListSubheader>
        }
        className={classes.root}
      >
        <MuiLink
          // target="_blank"
          rel="noopener noreferrer"
          href="https://ndolet.com"
        >
          <ListItem
            button
            component="div"
            selected={urlFirstPart === "https://ndolet.com"}
            onClick={() => setMenuDrawer(false)}
            onKeyDown={() => setMenuDrawer(false)}
          >
            <ListItemText primary="Home" className={classes.parentText} />
          </ListItem>
        </MuiLink>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="Webinar Home" className={classes.parentText} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/webinar"
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="Webinars" className={classes.parentText} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/requestwebinar"
          selected={urlFirstPart === "requestwebinar"}
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText
            primary="Webinar Request"
            className={classes.parentText}
          />
        </ListItem>

        <MuiLink
          // target="_blank"
          rel="noopener noreferrer"
          href="https://ndolet.com/lgrg/contact-us.html"
        >
          <ListItem
            button
            component="div"
            selected={
              urlFirstPart === "https://ndolet.com/lgrg/contact-us.html"
            }
            onClick={() => setMenuDrawer(false)}
            onKeyDown={() => setMenuDrawer(false)}
          >
            <ListItemText primary="Contact Us" className={classes.parentText} />
          </ListItem>
        </MuiLink>
        <MuiLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://ndolet.com/webinaradmin"
        >
          <ListItem
            button
            component="div"
            selected={
              urlFirstPart === "https://https://ndolet.com/webinaradmin"
            }
            onClick={() => setMenuDrawer(false)}
            onKeyDown={() => setMenuDrawer(false)}
          >
            <ListItemText
              primary="Admin Center"
              className={classes.parentText}
            />
          </ListItem>
        </MuiLink>
        <ListItem
          button
          component={Link}
          to="/register"
          selected={urlFirstPart === "register"}
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="Register" className={classes.parentText} />
        </ListItem>
      </List>
    </>
  );
}

MobileMenuItem.propTypes = {
  setMenuDrawer: PropTypes.func.isRequired,
};

export default MobileMenuItem;
