import React, {PureComponent} from 'react';
import Row from '../Row'

export default class EmaiContent extends PureComponent {
  render() {
    return (
      <div className="email-content">
        <Row allowedDropEffect="any" />
        <br/>
        <Row allowedDropEffect="any" />
        <Row allowedDropEffect="any" />
      </div>
    );
  }
}