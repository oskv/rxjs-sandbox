import React, {PureComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

export default class HeaderBar extends PureComponent {
  render() {
    return (
      <AppBar className="main-app-bar">
        <Toolbar>
          <Icon className="logo-icon">email</Icon>
          <Typography variant="headline" color="inherit">
            Email editor
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}