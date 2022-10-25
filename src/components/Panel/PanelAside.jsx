import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

// @material-ui/icons
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderLeft: `2px solid ${theme.palette.secondary.light}`,
    position: "sticky",
    top: theme.pageTopMargin.asideTop,
    direction: "ltr",
  },
  cardContent: {
    paddingTop: theme.spacing(0),
    paddingBottom: `${theme.spacing(0)} !important`,
  },
  categoryIcon: {
    color: theme.palette.secondary.main,
  },
}));

function PanelAside({
  user,
  setAuthToken,
  isLecturer,
  selectedIndex,
  setSelectedIndex,
}) {
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 30) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLecturer");
      setAuthToken("");
    }
  };

  const classes = useStyles();

  return (
    <Card component="aside" className={classes.root}>
      <CardContent className={classes.cardContent}>
        <List component="div" aria-label="aside category">
          <ListItem divider>
            <ListItemIcon>
              <AssignmentOutlinedIcon
                fontSize="small"
                className={classes.categoryIcon}
              />
            </ListItemIcon>
            {/* <ListItemText primary={`منوی کاربری (${userNameText})`} /> */}
            {user && (
              <ListItemText
                primary={user.name}
                secondary={isLecturer ? "speaker" : "user"}
              />
            )}
          </ListItem>

          {isLecturer ? (
            <ListItem
              button
              selected={selectedIndex === 10}
              onClick={(event) => handleListItemClick(event, 10)}
            >
              <ListItemText primary="My webinars" />
            </ListItem>
          ) : (
            <ListItem
              button
              selected={selectedIndex === 10}
              onClick={(event) => handleListItemClick(event, 10)}
            >
              <ListItemText primary="Purchased webinars" />
            </ListItem>
          )}

          <ListItem
            button
            selected={selectedIndex === 30}
            onClick={(event) => handleListItemClick(event, 30)}
          >
            <ListItemText primary="Exit" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

PanelAside.defaultProps = {
  isLecturer: false,
  user: null,
};

PanelAside.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  isLecturer: PropTypes.bool,
  setSelectedIndex: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default PanelAside;
