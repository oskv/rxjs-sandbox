import React, { PureComponent } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import BlockDropTarget from '../BlockDropTarget'
import { findDOMNode } from 'react-dom'
import './styles.css'

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
    if (!component) {
      return null
    }
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = (findDOMNode(
      component,
    )).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = (clientOffset).y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  }
};

const boxSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
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
    const { canDrop, isOver, allowedDropEffect, connectDropTarget, connectDragSource, connectDragPreview, columns } = this.props;
    const isActive = canDrop && isOver;
    const columnsElements = columns.map((column, i) =>
      <BlockDropTarget key={i} width={`${column.width}%`}/>
    );

    let backgroundColor = 'antiquewhite'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return (
      connectDragPreview &&
      connectDropTarget &&
      connectDragPreview(
        connectDropTarget(
        <div style={{ backgroundColor }}>
          {connectDragSource(<span>Handler {this.props.id}</span>)}

          <div className='row-block-wrapper'>{columnsElements}</div>
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
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(dropTarget);