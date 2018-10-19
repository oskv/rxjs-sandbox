import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Settings from '@material-ui/icons/Settings';
import LineStyle from '@material-ui/icons/LineStyle';
import RowTemplatesList from '../RowTemplatesList'

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
            <Tab label="Content" icon={<LibraryAdd />} className="tab-label" />
            <Tab label="Rows" icon={<LineStyle />} className="tab-label" />
            <Tab label="Settings" icon={<Settings />} className="tab-label" />
          </Tabs>
        </Paper>
        {value === 0 && <div>Item One</div>}
        {value === 1 && <RowTemplatesList/>}
        {value === 2 && <div>Item Three</div>}
      </div>
    );
  }
}