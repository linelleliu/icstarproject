import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import ChatIcon from '@material-ui/icons/Chat';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#1976d2",
 
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={props.page}
      onChange={(event,NewValue) => {
        props.changePage(NewValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ color: blue[50] }} label="CLOCK" icon={<AccessTimeIcon />} />
      <BottomNavigationAction style={{ color: blue[50] }} label="TIME LOG"icon={<ListAltRoundedIcon />} />
      <BottomNavigationAction style={{ color: blue[50] }} label="CHAT" icon={<ChatIcon />} />
      <BottomNavigationAction style={{ color: blue[50] }} label="JOBS" icon={<PostAddIcon />} />
    </BottomNavigation>
  );
}