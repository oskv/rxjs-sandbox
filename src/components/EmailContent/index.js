import React, {PureComponent} from 'react';
import { connect } from 'react-redux'
import Row from '../Row'
import RowDropTarget from '../RowDropTarget'
import './styles.css'
const update = require('immutability-helper');

class EmaiContent extends PureComponent {

  /*constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
  }*/

  render() {
    const { rows } = this.props;
    console.log('rows render');
    console.log(rows);
    const listRows = rows.map((row, i) =>
      <div key={row.hash}>
        <RowDropTarget rowIndex={i} position='before' />
        <Row allowedDropEffect="any"
             index={i}
             id={row.id}
             columns={row.columns}
             name={row.name}
             moveCard={this.moveCard}
        />
        { i === rows.length-1 && <RowDropTarget rowIndex={i} position='after' />}
      </div>
    );
    return (
      <div className="email-content">
        {listRows}
        {!listRows.length && <RowDropTarget rowIndex={0} />}
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

const mapStateToProps = state => ({
  rows: state.rows,
});

export default connect(
  mapStateToProps,
)(EmaiContent)