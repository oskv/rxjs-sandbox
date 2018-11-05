import * as React from 'react'
import {
  ConnectDragSource,
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
} from 'react-dnd'
//import ItemTypes from './ItemTypes'

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
}


 class Box extends React.Component {
  render() {
    const { isDragging, connectDragSource } = this.props
    const { name } = this.props
    const opacity = isDragging ? 0.4 : 1

    return (
      connectDragSource &&
      connectDragSource(<div style={{ opacity }}>{name}</div>)
    )
  }
}

export default DragSource(
  'box',
  boxSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)