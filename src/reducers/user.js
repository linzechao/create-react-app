const user = (state = { token: '' }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, token: action.token }

    default:
      return state
  }
}

export default user
