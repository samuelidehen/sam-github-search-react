// import handleActions NOT handleAction - note plural form.
import { handleActions } from 'redux-actions'
import { SET_REPOS } from '../constants/actionTypes'

export default handleActions(
  {
    [SET_REPOS]: (state, action) => action.payload
  },
  {}
)
