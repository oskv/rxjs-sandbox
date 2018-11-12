import React, { PureComponent } from 'react'
import './styles.css'

export default class BlockWrapper extends PureComponent {
  render() {
    const { block } = this.props;

    return (
      <div className='text-block'>
        <span>{block.type}</span>
      </div>
    )
  }
}