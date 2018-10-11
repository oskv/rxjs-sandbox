import React, { PureComponent } from 'react';
import './styles.css'
import Sidebar from '../Sidebar'
import HeaderBar from '../HeaderBar'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HeaderBar/>
        <Sidebar/>
        <h2>Article</h2>
      </div>
    );
  }
}