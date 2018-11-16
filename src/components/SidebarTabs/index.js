import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Settings from '@material-ui/icons/Settings';
import LineStyle from '@material-ui/icons/LineStyle';
import RowTemplatesList from '../RowTemplatesList'
import BlockTemplatesList from '../BlockTemplatesList'
import BlockProperties from '../BlockProperties'
import {connect} from "react-redux";

class SidebarTabs extends PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { activeBlock } = this.props;
    const isBlockSelected = activeBlock.id;

    return (
      <div className="sidebar-tabs">
        <Paper square>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Content" icon={<LibraryAdd />} className="tab-label" />
            <Tab label="Rows" icon={<LineStyle />} className="tab-label" />
            <Tab label="Settings" icon={<Settings />} className="tab-label" />
          </Tabs>
        </Paper>
        {value === 0 && <BlockTemplatesList/>}
        {value === 0 && isBlockSelected && <BlockProperties block={activeBlock} />}
        {value === 1 && <RowTemplatesList/>}
        {value === 2 && <div>Item Three</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeBlock: state.activeBlock,
});
export default connect(mapStateToProps)(SidebarTabs);