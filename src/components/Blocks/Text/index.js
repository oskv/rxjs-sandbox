import React, { PureComponent } from 'react'
import './styles.css'

export default class BlockWrapper extends PureComponent {
  render() {
    const { options } = this.props;

    return (
      <div className='text-block'>
        <span>{options.type}</span>
      </div>
    )
  }
}