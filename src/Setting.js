import React from 'react';
import logo from "./personicon.jpg"
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/Lock';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: "#1976d2", //blue 700
    size: "small",
  
  },
}));



function HomeIcon(props) {
  return (
    <Settings {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Settings>
  );
}

function Settings()  {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo}  width="320vw" height="220vh" className="logo"></img>
      <h3>Joe Smith</h3>
      <button  class="button">Edit</button><br/><br/>
      <ListItem button>
        <ListItemIcon>
          <NotificationsIcon className={classes.root} />
        </ListItemIcon>
        <ListItemText primary="Notifications" class="color"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon className={classes.root}  />
        </ListItemIcon>
        <ListItemText primary="General" class="color" /> 
      </ListItem>
      
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon className={classes.root}  />
        </ListItemIcon>
        <ListItemText primary="Accounts" class="color"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          < LockIcon  className={classes.root} />
        </ListItemIcon>
        <ListItemText primary="Privacy" class="color"/>
        
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HelpIcon className={classes.root} />
        </ListItemIcon>
        <ListItemText primary="Help" class="color"/>
      </ListItem>
      </div>
  );
}
export default Settings;

// settings.css
// h1
// {
//     color: rgb(68, 68, 221);
// }

// .button {
//     float: right;
//     color:rgb(68, 68, 221);
//     border: black solid 1px;
//   }

//   .color
//   {
//       color: rgb(68, 68, 221);;
//   }
//   .image
//   {
//     margin-top: 30px;
//   }