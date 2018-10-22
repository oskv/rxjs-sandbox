import React, {PureComponent} from 'react';
import './styles.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { DragSource } from 'react-dnd';

/*export default class RowTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = props.columns;
  }

  getWidth = (width) => {
    return  Math.round(width / 100 * 12);
  };

  render() {
    return (
      <Paper className="row-template">
        <Grid  container className='grid' justify="center">
        { this.columns.map((column, i) =>
            <Grid key={i} item xs={this.getWidth(column.width)}>
              <span className="col"/>
            </Grid>
        )}
        </Grid>
      </Paper>
    );
  }
}*/

const Types = {
  CARD: 'card'
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const cardSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = { id: props.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('end grag');
    //CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

// Use the decorator syntax
/*@DragSource(Types.CARD, cardSource, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging()
}))*/

/*export default class Card extends React.Component {
  render() {
    // Your component receives its own props as usual
    const { id } = this.props;

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div>
        I am a draggable card number {id}
        {isDragging && ' (and I am being dragged now)'}
      </div>
    );
  }
}*/

class RowTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = props.columns;
  }

  getWidth = (width) => {
    return  Math.round(width / 100 * 12);
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div>
      <Paper className="row-template">
        <Grid  container className='grid' justify="center">
          { this.columns.map((column, i) =>
            <Grid key={i} item xs={this.getWidth(column.width)}>
              <span className="col"/>
            </Grid>
          )}
        </Grid>
      </Paper>
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging()
}))(RowTemplate);