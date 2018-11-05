import React, { PureComponent } from 'react';
import './styles.css'
import Sidebar from '../Sidebar'
import HeaderBar from '../HeaderBar'
import EmailContent from '../EmailContent'
import Container from '../Container'
import RowTemplatesList from '../RowTemplatesList'
import RowTemplate from '../RowTemplate'
import RowContent from '../RowContent'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from '../Dustbin'
import Box from '../Box'

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