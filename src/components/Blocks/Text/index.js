import React, { PureComponent } from 'react'
import './styles.css'

export default class Text extends PureComponent {
  render() {
    const { block } = this.props;

    return (
      <div className='text-block'>
        <span>{block.data.options.text}</span>
      </div>
    )
  }
}