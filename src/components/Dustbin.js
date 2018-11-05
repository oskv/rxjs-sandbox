import * as React from 'react'
import {
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  ConnectDropTarget,
} from 'react-dnd'
//import ItemTypes from './ItemTypes'


const boxTarget = {
  drop() {
    return { name: 'Dustbin' }
  },
}


class Dustbin extends React.Component {
  render() {
    const {canDrop, isOver, connectDropTarget} = this.props
    const isActive = canDrop && isOver

    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return (
      connectDropTarget &&
      connectDropTarget(
        <div style={{
          backgroundColor
        }}>
          {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>,
      )
    )
  }
}

export default  DropTarget(
  'box',
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(Dustbin)