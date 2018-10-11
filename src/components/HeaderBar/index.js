import React, {PureComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';

export default class HeaderBar extends PureComponent {
  render() {
    return (
      <AppBar className="main-app-bar">
        <p>AppBar</p>
      </AppBar>
    );
  }
}