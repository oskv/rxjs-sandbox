const activeBlock = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_BLOCK':
      return Object.assign({}, action.block);
    case 'DISACTIVATE_BLOCK':
      return {};
    default:
      return state;
  }
};

export default activeBlock;