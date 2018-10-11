import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class SidebarTabs extends PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="sidebar-tabs">
        <Paper square>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper>
        {value === 0 && <div>Item One</div>}
        {value === 1 && <div>Item Two</div>}
        {value === 2 && <div>Item Three</div>}
      </div>
    );
  }
}