export const addRow = (rowIndex, position, templateData) => ({
  type: 'ADD_ROW',
  rowIndex,
  position,
  templateData
});

export const moveRow = (currentIndex, newIndex) => ({
  type: 'MOVE_ROW',
  currentIndex,
  newIndex
});

export const addBlock = ({ columnIndex, rowId, blockTemplateData }) => ({
  type: 'ADD_BLOCK',
  columnIndex,
  rowId,
  blockTemplateData,
});