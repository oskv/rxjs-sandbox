import React, { PureComponent } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import Block from '../Block'

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

class Row extends PureComponent {
  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget, connectDragSource } = this.props;
    const isActive = canDrop && isOver

    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
        <div style={{ backgroundColor }}>
          {`Works with ${allowedDropEffect} drop effect`}
          <br />
          <br />
          <Block />
          <br />
          <br /><br />
          <br />
          {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>,
      )
    ))
  }
}

const dropTarget =  DropTarget('box', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Row);

export default DragSource('box', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(dropTarget);