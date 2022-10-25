import React, { useState, useEffect } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, SwipeableDrawer } from "@material-ui/core";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";

// components
import MobileMenuItem from "components/Header/MobileMenuItem";

const useStyles = makeStyles({
  root: { direction: "ltr" },
  mobileMenuBtn: {
    margin: "5px 0 5px -8px",
    height: "60px",
    color: "#fff",
  },
  mobileMenuWrapper: {
    width: 250,
  },
});

function MobileMenu() {
  const [menuDrawer, setMenuDrawer] = useState(false);

  useEffect(() => {}, []);

  const classes = useStyles();

  return (
    <>
      <IconButton
        onClick={() => setMenuDrawer(true)}
        className={classes.mobileMenuBtn}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={menuDrawer}
        onClose={() => setMenuDrawer(false)}
        onOpen={() => setMenuDrawer(true)}
      >
        <div className={classes.mobileMenuWrapper} role="presentation">
          <MobileMenuItem setMenuDrawer={setMenuDrawer} />
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;
