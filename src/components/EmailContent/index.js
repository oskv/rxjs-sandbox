import React, {PureComponent} from 'react';
import Row from '../Row'
import RowDropTarget from '../RowDropTarget'
import './styles.css'
const update = require('immutability-helper');

export default class EmaiContent extends PureComponent {

  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      rows: [
        { id: 1, name: 'row 1', columns: [{ width: 100 }] },
        { id: 2, name: 'row 2', columns: [
          {
            width: 60,
            block: {
              id: 'block_1',
              type: 'text',
              value: 'Enter some text here',
            }
          },
          { width: 40 }] },
        { id: 3, name: 'row 3', columns: [{ width: 33 }, { width: 33 }, { width: 33 }] },
        { id: 4, name: 'row 4', columns: [{ width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }] },
      ]
    }
  }

  render() {
    const { rows } = this.state;
    const listRows = rows.map((row, i) =>
      <div key={row.id}>
        <RowDropTarget />
        <Row allowedDropEffect="any"
             index={i}
             id={row.id}
             columns={row.columns}
             name={row.name}
             moveCard={this.moveCard}
        />
        { i === rows.length-1 && <RowDropTarget/>}
      </div>
    );
    return (
      <div className="email-content">
        {listRows}
      </div>
    );
  }

  moveCard(dragIndex, hoverIndex) {
    const { rows } = this.state
    const dragCard = rows[dragIndex]
    console.log('MOVE');

    this.setState(
      update(this.state, {
        rows: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }
}