import React, {PureComponent} from 'react';
import Drawer from '@material-ui/core/Drawer';
import './styles.css'
import Tabs from '../SidebarTabs'

export default class Sidebar extends PureComponent {
  render() {
    return (
      <Drawer
        variant="permanent"
        anchor="right"
        className="app-sidebar">
        <Tabs/>
      </Drawer>
    );
  }
}