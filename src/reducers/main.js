const main = (state = { tab: 'Home' }, action) => {
  switch (action.type) {
    case 'SELECTED_TAB':
      return { ...state, tab: action.tab }

    default:
      return state
  }
}

export default main
