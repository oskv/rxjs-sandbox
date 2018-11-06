import React, { PureComponent } from 'react';
import './styles.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

class BlockTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.type = props.type;
  }

  render() {
    const { connectDragSource } = this.props;
    return connectDragSource && connectDragSource(
      <div className="block-template">
        <Card>
          <CardContent>
            <Typography variant="subheading">{this.type}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default DragSource('block', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(BlockTemplate);