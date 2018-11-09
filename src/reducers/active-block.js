const activeBlock = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_BLOCK':
      return { id: action.blockId };
    case 'DIACTIVATE_ACTIVE_BLOCK':
      return {};
    default:
      return state;
  }
};

export default activeBlock;