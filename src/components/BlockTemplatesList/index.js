import React, {PureComponent} from 'react';
import BlockTemplate from '../BlockTemplate';
import './styles.css'

export default class RowTemplatesList extends PureComponent {
  constructor(props) {
    super(props);
    this.blocks = [
      { type: 'text', icon: ''},
      { type: 'image', icon: ''},
    ];
  }

  render() {
    const listRows = this.blocks.map((block, i) =>
      <li key={i}>
        <BlockTemplate type={block.type} icon={block.icon} />
      </li>
    );
    return (
      <ul className='block-templates-list'>
        {listRows}
      </ul>
    );
  }
}