import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getUsers: ['payload'],
})

export const UsersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  users: [],
})

/* ------------- Selectors ------------- */

export const UsersSelectors = {
  selectAvatar: state => state.user.avatar
}

/* ------------- Reducers ------------- */

// login
export const getUsers = (state, action) => {
  // const { users } = action.payload
  console.log("====action, action.payload", action, action.payload)
  return state.merge({ users: action.payload })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USERS]: getUsers,
})
