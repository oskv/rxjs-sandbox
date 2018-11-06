import React, { PureComponent } from 'react'
import { DropTarget } from 'react-dnd'

const blockTarget = {
  drop() {
    console.log('drop');
    return {
      name: `Dustbin`,
    }
  },
  hover(props, monitor, component) {
    console.log('hover');
  }
};

class BlockDropTarget extends PureComponent {
  render() {
    const { canDrop, isOver, connectDropTarget, width } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = 'grey';
    if (isActive) {
      backgroundColor = 'blue';
    } else if (canDrop) {
      backgroundColor = 'cadetblue';
    }

    return (
      connectDropTarget &&
      connectDropTarget(
        <div style={{ backgroundColor, width, border: '1px dashed blue' }}>
          <p>Drag a block here</p>
        </div>,
      )
    )
  }
}

export default DropTarget('block-drop-target', blockTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(BlockDropTarget);
