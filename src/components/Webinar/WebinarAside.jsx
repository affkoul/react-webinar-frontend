import React, { useState, useEffect } from "react";
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

// utils
import api from "utils/api";

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

function WebinarAside({ setContentCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    api
      .getWebinarCategoryList()
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();

  const handleListItemClick = (event, category) => {
    if (category !== null) {
      setContentCategory(category);
      setSelectedIndex(category);
    } else {
      setContentCategory(null);
      setSelectedIndex(null);
    }
  };

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
            <ListItemText primary="Categories of webinars" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === null}
            onClick={(event) => handleListItemClick(event, null)}
          >
            <ListItemText primary="All" />
          </ListItem>

          {categoryList.map((categoryItem) => (
            <ListItem
              key={categoryItem.categoryId}
              button
              selected={selectedIndex === categoryItem.categoryId}
              onClick={(event) =>
                handleListItemClick(event, categoryItem.categoryId)
              }
            >
              <ListItemText primary={categoryItem.category} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

WebinarAside.propTypes = {
  setContentCategory: PropTypes.func.isRequired,
};

export default WebinarAside;
