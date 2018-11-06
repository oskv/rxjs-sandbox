import React, { PureComponent } from 'react'
import { DropTarget } from 'react-dnd'
import './styles.css'

const boxTarget = {
  drop() {
    console.log('drop Row Drop Target');
    return {
      name: `Dustbin`,
    }
  },
  /*hover(props, monitor, component) {
    console.log('hover Row Drop Target');
  }*/
};

class RowDropTarget extends PureComponent {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    let className = '';

    if (isActive) {
      className = 'active';
    } else if (canDrop) {
      className = 'can-drop';
    }

    return (
      connectDropTarget &&
      connectDropTarget(
        <div className={`row-drop-target ${className}`} />,
      )
    )
  }
}

export default DropTarget('row-drop-target', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(RowDropTarget);