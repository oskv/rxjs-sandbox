const activeRow = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ROW':
      return {};
    case 'DIACTIVATE_ACTIVE_ROW':
      return {};
    default:
      return state;
  }
};

export default activeRow;