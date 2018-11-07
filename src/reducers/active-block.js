const activeBlock = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_BLOCK':
      return {};
    case 'DIACTIVATE_ACTIVE_BLOCK':
      return {};
    default:
      return state;
  }
};

export default activeBlock;