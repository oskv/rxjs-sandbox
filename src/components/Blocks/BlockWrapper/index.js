import React, { PureComponent } from 'react'
import { DragSource } from 'react-dnd'
import Text from '../Text';
import './styles.css'

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

class BlockWrapper extends PureComponent {
  render() {
    const { options, connectDragSource } = this.props;

    return (
      connectDragSource &&
      connectDragSource(
        <div className='block-wrapper'>
          { options.type === 'text' && <Text options={options} />}
        </div>,
      )
    )
  }
}

export default DragSource('column', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(BlockWrapper);