import React, { useState } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";

// components
import List from "components/Webinar/List";
import WebinarAside from "components/Webinar/WebinarAside";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    marginBottom: "200px",
    backgroundColor: "#FFF",
    direction: "ltr",
  },
  container: {
    // paddingBottom: theme.spacing(0),
  },

  featuresMainTitle: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
    padding: `0 ${theme.spacing(3)}px`,
  },
}));

function Webinar() {
  const [contentCategory, setContentCategory] = useState(null);

  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Box component="div">
        <Container maxWidth="lg" className={classes.container}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <WebinarAside setContentCategory={setContentCategory} />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <List
                xsGrid={12}
                smGrid={6}
                mdGrid={4}
                lgGrid={4}
                contentCategory={contentCategory}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Webinar;
