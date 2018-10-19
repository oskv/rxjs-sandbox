import React, {PureComponent} from 'react';
import RowTemplate from '../RowTemplate';
import './styles.css'

export default class RowTemplatesList extends PureComponent {
  constructor(props) {
    super(props);
    this.rows = [
      { columns: [{ width: 100 }]},
      { columns: [{ width: 50 }, { width: 50 }]},
      { columns: [{ width: 60 }, { width: 40 }]},
      { columns: [{ width: 40 }, { width: 60 }]},
      { columns: [{ width: 33 }, { width: 33 }, { width: 33 }]},
      { columns: [{ width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }]},
    ];
  }

  render() {
    const listRows = this.rows.map((row, i) =>
      <li key={i}>
        <RowTemplate columns={row.columns} />
      </li>
    );
    return (
      <ul className='row-templates-list'>
        {listRows}
      </ul>
    );
  }
}