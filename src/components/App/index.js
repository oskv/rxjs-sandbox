import React, { PureComponent } from 'react';
import './styles.css'
import Sidebar from '../Sidebar'
import HeaderBar from '../HeaderBar'

export default class App extends PureComponent {
  render() {
    return (
      <div className='page-content'>
        <HeaderBar/>
        <main>
          <p>111111 1111111 111111 1111111 111111 1111111 111111 1111111 111111 1111111 111111 1111111 111111 1111111 111111 1111111 </p>
          <p>111111</p>
          <p>111111</p>
          <p>111111</p>
          <p>111111</p>
        </main>
        <Sidebar/>
      </div>
    );
  }
}