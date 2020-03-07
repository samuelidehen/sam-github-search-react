import { createAction } from 'redux-actions'
import { normalize, schema } from 'normalizr'
import { API, SET_REPOS } from '../constants/actionTypes'
import { apiPayloadCreator } from '../utils/appUtils'
import { GET_REPOS } from '../constants/labels'

const getReposAC = createAction(API, apiPayloadCreator)
export const getRepos = searchParam =>
  getReposAC({
    url: `/${searchParam}/repos`,
    onSuccess: setRepos,
    label: GET_REPOS
  })

// this function will be called upon a successful data fetch  - and passed the retrieved data.
function setRepos (repos) {
  // data returned from the server is an array of objects
  // we gotta normalize this data before sending it off to the reducers.
  const reposSchema = new schema.Entity('repos')
  const reposListSchema = new schema.Array(reposSchema)
  // in computer programming, a schema is the organization or structire for a database.
  const normalizedData = normalize(repos, reposListSchema)
  return {
    type: SET_REPOS,
    payload: normalizedData.entities.repos
  }
}
