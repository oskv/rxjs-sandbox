import { generateUid, arrayMove } from '../services/utils'

const rows = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return addRow(state, action);
    case 'MOVE_ROW':
      const { currentIndex, newIndex } = action;
      return moveRow(state, currentIndex, newIndex);
    case 'ADD_BLOCK':
      return addBlock(state, action);
    default:
      return state;
  }
};

export default rows;

function createStateCopy(state) {
  return state.slice();
}

function addRow(rows, { position, rowIndex, templateData }) {
  const row = { id: generateUid(), hash: generateUid(), ...templateData };
  const rowsCopy = createStateCopy(rows);
  let insertIndex = (position === 'after') ? rowIndex+1 : rowIndex;
  rowsCopy.splice(insertIndex, 0, row);
  return rowsCopy;
}

function moveRow(rows, currentIndex, newIndex) {
  console.log('mmmove row');
  const rowsCopy = createStateCopy(rows);
  arrayMove(rowsCopy, currentIndex, newIndex);
  console.log(currentIndex, newIndex);
  console.log(rowsCopy);
  return rowsCopy;
}

function addBlock(rows, { columnIndex, rowId, blockTemplateData }) {
  const block = {
    id: generateUid(),
    type: blockTemplateData.type,
    data: blockTemplateData,
  };
  const rowsCopy = createStateCopy(rows);
  const row = rowsCopy.find(row => row.id === rowId);
  const column = row.columns[columnIndex];
  row.hash = generateUid();
  column.block = block;
  return rowsCopy;
}