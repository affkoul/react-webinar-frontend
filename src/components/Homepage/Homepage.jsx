import React from "react";

// @material-ui/core
import { Box } from "@material-ui/core";

// components
import HelmetWrapper from "components/Homepage/HelmetWrapper";
import Banner from "components/Homepage/Banner";
import Features from "components/Features/Features";
import Social from "components/Social/Social";
import GoldWebinar from "components/Webinar/GoldWebinar";
import FeaturedWebinar from "components/Webinar/FeaturedWebinar";

function Homepage() {
  return (
    <>
      <HelmetWrapper
        title="Online webinar system"
        description="Online webinar system"
        keyword="Online webinar system"
      />
      <Box component="main">
        <Banner />
        <Features />
        <GoldWebinar
          title="Golden webinars"
          articleChapterCount={4}
          isFeatured
        />
        <Social />
        <FeaturedWebinar
          title="The latest webinars"
          articleChapterCount={4}
          isFeatured
          moreBtn
          moreBtnLink="/webinar"
        />
      </Box>
    </>
  );
}

export default Homepage;
