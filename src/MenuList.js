import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CommuteIcon from '@material-ui/icons/Commute';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Surveys" />
    </ListItem>
    <ListItem button> 
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Progress" />
    </ListItem>
    <ListItem button> 
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Advocacy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CommuteIcon />
      </ListItemIcon>
      <ListItemText primary="Transportation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Payment Log" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Location" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
    

  </div>
);