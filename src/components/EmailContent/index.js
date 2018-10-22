import React, {PureComponent} from 'react';
import './styles.css'
import { DropTarget, ConnectDropTarget } from 'react-dnd'

const boxTarget = {
  drop({ allowedDropEffect }) {
    return {
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }
  },
}

 class EmaiContent extends PureComponent {

  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="email-content">
        1111111111
      </div>
    );
  }
}

export default DropTarget('box', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(EmaiContent)