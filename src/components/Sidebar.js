import React, {PureComponent} from 'react';
import Drawer from '@material-ui/core/Drawer';

export default class Sidebar extends PureComponent {
  render() {
    return (
      <Drawer
        variant="permanent"
        anchor="right">
        <p>Drawer</p>
      </Drawer>
    );
  }
}