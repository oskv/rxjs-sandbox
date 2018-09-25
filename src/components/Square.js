import React, {PureComponent} from 'react';

export default class Square extends PureComponent {
  render() {
    return (
      <button className="square" onClick={ this.props.onClick }>
        {this.props.value}
      </button>
    );
  }
}