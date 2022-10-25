import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

// @material-ui/icons
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

// components
import FooterListItem from "components/Footer/FooterListItem";

// utils
import { toFaDigit } from "utils/commonUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    direction: "ltr",
  },
  footerSectionListItemText: {
    "& span": {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: "400",
      color: "#fff",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  },
  footerIcon: {
    color: theme.palette.secondary.main,
  },
  socialIconWrapper: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  socialIcon: {
    marginRight: theme.spacing(1),
    "& svg": {
      transform: "rotateZ(0deg)",
      transition: `all ${theme.transitions.easing.easeInOut}`,
      transitionDuration: theme.transitions.duration.complex,
    },
    "&:hover svg": {
      transform: "rotateZ(360deg)",
    },
  },
  copyright: {
    backgroundColor: "rgb(0,0,0,0.4)",
    borderTopLeftRadius: "60px",
    borderTopRightRadius: "60px",
  },
  copyrightText: {
    color: "#fff",
    textAlign: "center",
    padding: `${theme.spacing(1.5)}px 0`,
  },
  copyrightLink: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <Box component="div">
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <List component="div">
                <ListItem>
                  <ListItemText
                    primary="Contact Us"
                    className={classes.footerSectionListItemText}
                  />
                </ListItem>

                <FooterListItem
                  type="tel-email"
                  // text={toFaDigit("(514) 638-2482")}
                  text="(514) 638-2482"
                  link="tel:+15146382482"
                  icon={
                    <CallIcon fontSize="small" className={classes.footerIcon} />
                  }
                />

                <FooterListItem
                  type="tel-email"
                  text="info@ndolet.com"
                  link="mailto:info@ndolet.com"
                  icon={
                    <EmailIcon
                      fontSize="small"
                      className={classes.footerIcon}
                    />
                  }
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List component="div">
                <ListItem>
                  <ListItemText
                    primary="Useful Links"
                    className={classes.footerSectionListItemText}
                  />
                </ListItem>
                <FooterListItem type="inner" text="Webinars" link="/webinar" />
                <FooterListItem
                  type="inner"
                  text="Request Webinars"
                  link="/requestwebinar"
                />
                <FooterListItem type="inner" text="Register" link="/register" />
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List component="div">
                <ListItem>
                  <ListItemText
                    primary="New Articles"
                    className={classes.footerSectionListItemText}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="div" className={classes.copyright}>
        <Container maxWidth="lg">
          <Typography
            variant="caption"
            component="p"
            className={classes.copyrightText}
          >
            All Rights Reserved. Ndolet Corp.
            <a
              href="https://ndolet.com/webinars"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.copyrightLink}
            >
              {`Webinar Organization System `}
            </a>
            All Rights Reserved. Ndolet Corp. 2022 ©
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
