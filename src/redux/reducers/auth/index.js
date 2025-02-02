// **  Initial State
const initialState = {
  userData: {},
  updateAdminData: {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.data,
        [action.config.storageTokenKeyName]: action[action.config.storageTokenKeyName],
        [action.config.storageRefreshTokenKeyName]: action[action.config.storageRefreshTokenKeyName]
      }
    case 'LOGOUT':
      localStorage.clear();
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }

    case 'UPDATE_ADMIN':
      return {...state, updateAdminData: action?.data}
    default:
      return state
  }
}

export default authReducer
