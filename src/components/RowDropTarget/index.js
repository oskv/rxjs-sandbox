import React, { PureComponent } from 'react'
import { DropTarget } from 'react-dnd'

const boxTarget = {
  drop({ allowedDropEffect }) {
    console.log('drop Row Drop Target');
    return {
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }
  },
  hover(props, monitor, component) {
    console.log('hover Row Drop Target');
  }
};

class RowDropTarget extends PureComponent {
  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget, connectDragSource } = this.props;
    const isActive = canDrop && isOver

    let backgroundColor = 'aliceblue'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return (
      connectDropTarget &&
      connectDropTarget(
        <div style={{ backgroundColor }}>
          <p>Drag a row here</p>
        </div>,
      )
    )
  }
}

export default DropTarget('row-drop-target', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(RowDropTarget);