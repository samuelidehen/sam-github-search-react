import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import repos from './repos'
import isLoading from './isLoading'

const rootReducer = combineReducers({
  repos,
  isLoading
})

const persistConfig = {
  key: 'netflixy',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
