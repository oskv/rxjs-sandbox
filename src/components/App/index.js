import React, { PureComponent } from 'react';
import './styles.css'
import Sidebar from '../Sidebar'
import HeaderBar from '../HeaderBar'
import EmailContent from '../EmailContent'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default class App extends PureComponent {
  render() {
    return (
      <div className='page-content'>
        <HeaderBar/>
        <DragDropContextProvider backend={HTML5Backend}>
          <main>
            <EmailContent />
          </main>
          <Sidebar/>
        </DragDropContextProvider>
      </div>
    );
  }
}