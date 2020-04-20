import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Menu,
} from "@material-ui/icons";

import avatar from "./Pritam.jpg";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#455765",
    height: "100%",
  },
  negi: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },

  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        variant="circle"
        src={avatar}
        alt="Pritam"
        className={classes.negi}
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon style={{ color: "white" }}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={lsItem.listText}
              style={{ color: "white" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: "#253a4b" }}>
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <Menu style={{ color: "white" }} />
          </IconButton>

          <Typography variant="h5"> My Portfolio</Typography>
          <MobileRightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
            <Footer />
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;