import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

// @material-ui/icons
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsappIcon from "@material-ui/icons/WhatsApp";

// components
import Title from "components/Common/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: `${theme.spacing(5)}px 0px`,
    direction: "ltr",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'red',
    width: "300px",
  },
  iconStyle: {
    fontSize: "40px",
    color: theme.palette.primary.main,
  },
  iconContainer: {
    backgroundColor: "rgb(255,255,255,0.6)",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.shortest,
    "&:hover": {
      backgroundColor: "rgb(255,255,255,0.8)",
    },
  },
}));

function Gallery() {
  const classes = useStyles();

  return (
    <>
      <Box component="section" className={classes.root}>
        <Box component="div">
          <Container maxWidth="lg" className={classes.container}>
            <Title text="Follow us on social networks" variant="h5" />
            <Box className={classes.iconsContainer}>
              <div className={classes.iconContainer}>
                <InstagramIcon className={classes.iconStyle} />
              </div>
              <div className={classes.iconContainer}>
                <TelegramIcon className={classes.iconStyle} />
              </div>
              <div className={classes.iconContainer}>
                <WhatsappIcon className={classes.iconStyle} />
              </div>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Gallery;
