import React, { PureComponent } from 'react'
import { DropTarget, DragSource } from 'react-dnd'

const boxTarget = {
  drop({ allowedDropEffect }) {
    console.log('drop');
    return {
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }
  },
  hover(props, monitor, component) {
    console.log('hover');
  }
};

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

class Block extends PureComponent {
  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget, connectDragSource } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = 'grey';
    if (isActive) {
      backgroundColor = 'blue';
    } else if (canDrop) {
      backgroundColor = 'cadetblue';
    }

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
        <div style={{ backgroundColor }}>
          <p>Drag a block here</p>
        </div>,
      )
    ))
  }
}

const dropTarget =  DropTarget('block', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Block);

export default DragSource('block', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(dropTarget);