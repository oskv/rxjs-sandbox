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
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${item} into ${dropResult}!`);
      console.log(item);
      console.log(dropResult);
    }
  },
};

class RowTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = props.columns;
  }

  getWidth = (width) => {
    return  Math.round(width / 100 * 12);
  };

  render() {
    const { connectDragSource } = this.props;
    return connectDragSource && connectDragSource(
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

export default DragSource('box', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(RowTemplate);