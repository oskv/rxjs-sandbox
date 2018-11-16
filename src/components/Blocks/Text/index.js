import React, { PureComponent } from 'react'
import './styles.css'
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as Icons from '../../../../node_modules/react-draft-wysiwyg/images/align-left.svg';





export default class Text extends PureComponent {
  render() {
    const { block } = this.props;

    return (
      <div className='text-block'>
  <Editor
    toolbarClassName="demo-toolbar-absolute"
    wrapperClassName="demo-wrapper"
    editorClassName="demo-editor"
    toolbarOnFocus
    toolbar={{
      options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'colorPicker', 'textAlign', 'link'],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
        bold: { className: 'bordered-option-classname' },
        italic: { className: 'bordered-option-classname' },
        underline: { className: 'bordered-option-classname' },
        strikethrough: { className: 'bordered-option-classname' },
        code: { className: 'bordered-option-classname' },
      },
       textAlign: {
        left: { icon: Icons.left, className: 'demo-option-custom' },
        center: { icon: Icons.center, className: 'demo-option-custom' },
        right: { icon: Icons.right, className: 'demo-option-custom' },
        justify: { icon: Icons.justify, className: 'demo-option-custom' },
      },
      blockType: {
        className: 'bordered-option-classname',
      },
      fontSize: {
        className: 'bordered-option-classname',
      },
      fontFamily: {
        className: 'bordered-option-classname',
      },
      link: {
        popupClassName: 'demo-popup-custom',
        link: { icon: Icons.link, className: 'demo-option-custom' },
        unlink: { icon: Icons.unlink, className: 'demo-option-custom' },
      },
      fontFamily: {
        className: 'bordered-option-classname',
      },
       colorPicker: {
        className: 'bordered-option-classname',
      },
    }}
  />
);
      </div>
    )
  }
}