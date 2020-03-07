import axios from 'axios'
import { API } from '../constants/actionTypes'
import { apiEnd, apiStart } from '../actions/apiActions'

// axios default config
axios.defaults.baseURL = 'https://api.github.com/users'
axios.defaults.headers.common['Content-Type'] = 'application/json'

// actual middleware implementation
const api = ({ dispatch }) => next => action => {
  next(action)
  if (action.type !== API) return

  const { url, method, data, onSuccess, onFailure, label } = action.payload

  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

  // blow the horn - api requested has started!
  if (label) {
    dispatch(apiStart(label))
  }
  // make actual request
  axios
    .request({
      url,
      method,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data))
    })
    .catch(error => {
      dispatch(onFailure(error))
    })
    .finally(() => {
      // blow the horn - api requested has ended!
      if (label) {
        dispatch(apiEnd(label))
      }
    })
}

export default api
