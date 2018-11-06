import React, {PureComponent} from 'react';
import Row from '../Row'
import RowDropTarget from '../RowDropTarget'
const update = require('immutability-helper');

export default class EmaiContent extends PureComponent {

  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      rows: [
        { id: 1, name: 'row 1' },
        { id: 2, name: 'row 2' },
        { id: 3, name: 'row 3' },
        { id: 4, name: 'row 4' },
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
             name={row.name}
             moveCard={this.moveCard}
        />
      </div>
    );
    return (
      <div className="email-content">
        {listRows}
        {/*<Row allowedDropEffect="any" />*/}
        {/*<br/>*/}
        {/*<Row allowedDropEffect="any" />*/}
        {/*<Row allowedDropEffect="any" />*/}
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