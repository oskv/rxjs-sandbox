import React, { PureComponent } from 'react';
import './styles.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      console.log(`You dropped ${item} into ${dropResult}!`);
      console.log(item);
      console.log(dropResult);
    }
  },
};

class BlockTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.type = props.type;
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource && connectDragSource(
      <div>
      <Paper className="block-template">
        <span>{this.type}</span>
      </Paper>
      </div>
    );
  }
}

export default DragSource('block', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(BlockTemplate);