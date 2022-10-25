import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

// @material-ui/isons
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CircleIcon from "@material-ui/icons/FiberManualRecord";

// Import Background Slider
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// assets
import imagebg1 from "assets/img/webinar-image.jpg";
import imagebg2 from "assets/img/webinar-image2.png";

// components
import BannerSliderBackground from "components/Homepage/BannerSliderBackground";

const useStyles = makeStyles((theme) => ({
  root: { direction: "ltr" },
  carouselStyle: {
    padding: 0,
    height: "100%",
    position: "relative",
    maxHeight: "1024px",
    "& > div:first-child": {
      height: "100%",
    },
    "& > div:first-child > div:nth-child(2)": {
      height: "100%",
      "& ul": {
        height: "100%",
      },
      "& ul>li": {
        height: "100%",
      },
    },
  },
  container: {
    direction: "ltr",
    height: "100%",
  },
  arrowStyle: {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    backgroundColor: "white",
    cursor: "pointer",
    "& svg": {
      fontSize: "20px",
      color: theme.palette.secondary.main,
    },
  },
  arrowStyleLeft: {
    right: "15px",
  },
  arrowStyleRight: {
    left: "15px",
  },
  indicatorStyle: {
    color: theme.palette.tertiary.main,

    transition: `all ${theme.transitions.easing.easeInOut}`,
    transitionDuration: theme.transitions.duration.shorter,
    "&:hover": {
      transform: "scale(1.3)",
    },
    "&>span": {
      cursor: "pointer",
    },
  },
  selectedIndicatorStyle: {
    color: theme.palette.secondary.main,
  },
}));

function BannerSlider() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        transitionTime={1000}
        interval={4000}
        infiniteLoop
        className={classes.carouselStyle}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <IconButton
              onClick={onClickHandler}
              className={`${classes.arrowStyle} ${classes.arrowStyleLeft}`}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <IconButton
              onClick={onClickHandler}
              className={`${classes.arrowStyle} ${classes.arrowStyleRight}`}
            >
              <NavigateNextIcon />
            </IconButton>
          )
        }
        renderIndicator={(onClickHandler, isSelected) => {
          if (isSelected) {
            return (
              <IconButton
                className={`${classes.indicatorStyle} ${classes.selectedIndicatorStyle}`}
              >
                <CircleIcon />
              </IconButton>
            );
          }
          return (
            <IconButton
              className={classes.indicatorStyle}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
            >
              <CircleIcon />
            </IconButton>
          );
        }}
      >
        <BannerSliderBackground
          imageBackground={imagebg1}
          title="System for holding online webinars"
          // buttonText="Register"
        />
        <BannerSliderBackground
          imageBackground={imagebg2}
          title="With the most up-to-date technologies in the world"
          // buttonText="About Us"
        />
      </Carousel>
    </div>
  );
}
export default BannerSlider;
