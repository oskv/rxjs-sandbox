import React, {PureComponent} from 'react';
import BlockTemplate from '../BlockTemplate';
import Grid from '@material-ui/core/Grid';
import './styles.css'

export default class RowTemplatesList extends PureComponent {
  constructor(props) {
    super(props);
    this.blocks = [
      { type: 'text', icon: 'text_format', data: { text: 'Input som text here'}},
      { type: 'image', icon: 'image'},
      { type: 'button', icon: 'insert_link'},
      { type: 'divider', icon: 'vertical_align_center'},
      { type: 'video', icon: 'videocam'},
    ];
  }

  render() {
    const listRows = this.blocks.map((block, i) =>
      <Grid item key={i} xs={6}>
        <BlockTemplate type={block.type} icon={block.icon} />
      </Grid>
    );
    return (
      <Grid container className='block-templates-list' justify='flex-start' spacing={24}>
        {listRows}
      </Grid>
    );
  }
}