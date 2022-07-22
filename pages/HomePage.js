import React from "react";
import { makeStyles } from "@mui/styles";
// import TopBar from './../components/TopBar/index';
import LeftBar from './../components/LeftBar/index'
import { ListItemButton } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100vh",
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItemTitle: {
    fontSize: 16,
    marginLeft: 16,
    color: "#616161",
    fontWeight: "bold",
  }
}));

function HomePage() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const classes = useStyles();
  return <div className={classes.root}>
    {/* <TopBar/> */}
    <LeftBar/>
  </div>;
}

export default HomePage;
