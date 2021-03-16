import React from "react";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import {  createMuiTheme, capitalize } from "@material-ui/core";
import categories from "../Content/category";
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft: 5,
    paddingRight: 10,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerLeft({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    {/* <List>
      <ListItem>
      <ButtonGroup disableElevation variant="contained" color="primary">
      <Button>English</Button>
      <Button>Hindi</Button>
    </ButtonGroup>
      </ListItem>
    </List>
    <Divider /> */}
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3, textTransform: capitalize }}
            button
            key={text}
            onClick={() => setCategory(text)}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((left) => (
        <React.Fragment key={left}>
          <Button onClick={toggleDrawer(left, true)}>
            <MenuIcon /> <span className="menu">Menu</span>
          </Button>
          <ThemeProvider theme={darkTheme}>
            <SwipeableDrawer
              anchor={left}
              open={state[left]}
              onClose={toggleDrawer(left, false)}
              onOpen={toggleDrawer(left, true)}
            >
              {list(left)}
            </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
      ))}
    </div>
  );
}
