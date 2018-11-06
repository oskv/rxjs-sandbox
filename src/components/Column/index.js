import React, { PureComponent } from 'react'
import { DropTarget } from 'react-dnd'
import './styles.css';
import BlockWrapper from '../Blocks/BlockWrapper'

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

class Column extends PureComponent {
  render() {
    const { canDrop, isOver, connectDropTarget, width, block } = this.props;
    const isActive = canDrop && isOver;
    let className = '';

    if (isActive) {
      className = 'active';
    } else if (canDrop) {
      className = 'can-drop';
    }

    return (
      <div className='column' style={{ width }}>
        { block && <BlockWrapper options={block} /> }

        {!block && connectDropTarget &&
          connectDropTarget(
            <div className={`column-drop-target ${className}`}>
              <span>Drag a content here</span>
            </div>,
          )
        }
      </div>
    )
  }
}

export default DropTarget('column', blockTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Column);
