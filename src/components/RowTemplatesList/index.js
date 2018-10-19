import React, {PureComponent} from 'react';
import RowTemplate from '../RowTemplate';

export default class RowTemplatesList extends PureComponent {
  constructor(props) {
    super(props);
    this.rows = [
      { id: 'row_100', columns: [{ width: 100 }]},
      { id: 'row_2x50', columns: [{ width: 50 }, { width: 50 }]},
      { id: 'row_65_35', columns: [{ width: 65 }, { width: 35 }]},
      { id: 'row_35_65', columns: [{ width: 35 }, { width: 65 }]},
      { id: 'row_3x33', columns: [{ width: 33 }, { width: 33 }, { width: 33 }]},
      { id: 'row_4x25', columns: [{ width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }]},
    ];
  }

  render() {
    const listRows = this.rows.map((row) =>
      <li key={row.id}>
        <RowTemplate columns={row.columns} />
      </li>
    );
    return (
      <div className='row-templates-list'>
        <ul>
          {listRows}
        </ul>
      </div>
    );
  }
}