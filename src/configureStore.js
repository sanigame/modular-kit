import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

export default (initialState) => {
  const middlewares = [thunk, logger]

  const enhancer = compose(
    applyMiddleware(...middlewares)
  )

  const store = createStore(reducers, initialState, enhancer)
  
  return store
}