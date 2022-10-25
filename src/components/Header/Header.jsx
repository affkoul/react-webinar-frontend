import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Hidden,
  Typography,
  Button,
  ListItemText,
  Link as MuiLink,
} from "@material-ui/core";

// react router
import { useLocation, Link } from "react-router-dom";

// components
import HeaderMenuItem from "components/Header/HeaderMenuItem";
import MobileMenu from "components/Header/MobileMenu";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  menu: {
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    zIndex: 1000,
    backgroundColor: theme.palette.tertiary.main,
    "& nav > ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "row",
      margin: "0",
      padding: "0",
    },
  },
  menuScrolled: {
    backgroundColor: theme.palette.tertiary.main,
    opacity: "95%",
    boxShadow: "5px 5px 10px rgb(183,176,176,0.4)",
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",

    "& svg": {
      color: theme.palette.primary.main,
    },
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0px 0px`,
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      padding: `0px ${theme.spacing(5)}px`,
      height: "90px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: `0px ${theme.spacing(2)}px`,
      height: "90px",
    },
  },
  logoContainer: {
    paddingRight: theme.spacing(2),
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    margin: `${theme.spacing(1)}px 0px`,
    "& a": {
      margin: `${theme.spacing(1)}px 0px`,
    },
  },
}));

function Header({ menuOnBanner, authToken }) {
  const [menuStyle, setMenuStyle] = useState("menuTop");
  /* eslint-disable no-unused-expressions */
  useEffect(() => {
    if (menuOnBanner) {
      window.pageYOffset > 0
        ? setMenuStyle("menuScrolled")
        : setMenuStyle("menuTop");
      window.onscroll = () => {
        if (window.pageYOffset > 0) {
          setMenuStyle("menuScrolled");
        } else {
          setMenuStyle("menuTop");
        }
      };
    } else {
      setMenuStyle("menuScrolled");
    }
  }, [menuOnBanner, menuStyle]);
  /* eslint-enable no-unused-expressions */
  const location = useLocation();
  const classes = useStyles();

  return (
    <Box
      component="header"
      className={
        menuStyle === "menuTop"
          ? classes.menu
          : `${classes.menu} ${classes.menuScrolled}`
      }
    >
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.logoContainer}>
          <Typography component="span" variant="h6"></Typography>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to={authToken ? "/panel" : "/login"}
          >
            {authToken ? `User Area` : "Login / Membership"}
          </Button>
        </div>
        <nav>
          <Hidden mdUp>
            <MobileMenu />
          </Hidden>

          <Hidden smDown>
            <ul>
              <MuiLink
                // target="_blank"
                rel="noopener noreferrer"
                href="https://ndolet.com"
              >
                <ListItemText primary="Home" className={classes.parentText} />
              </MuiLink>
              <HeaderMenuItem
                text="Webinar Home"
                menuStyle={menuStyle}
                link="/"
                type="inner"
                selected={location.pathname === "/"}
              />
              <HeaderMenuItem
                text="Webinars"
                menuStyle={menuStyle}
                link="/webinar"
                type="inner"
                selected={location.pathname === "/webinar"}
              />
              <HeaderMenuItem
                text="Webinar Request"
                menuStyle={menuStyle}
                link="/requestwebinar"
                type="inner"
                selected={location.pathname === "/requestwebinar"}
              />
            </ul>
          </Hidden>
        </nav>
      </Container>
    </Box>
  );
}
Header.defaultProps = {
  menuOnBanner: false,
  authToken: "",
};

Header.propTypes = {
  menuOnBanner: PropTypes.bool,
  authToken: PropTypes.string,
};

export default Header;
