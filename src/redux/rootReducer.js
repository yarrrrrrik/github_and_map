import {combineReducers} from 'redux'
import {reposReducer} from './reposReducer'
import {issuesReducer} from './issuesReducer'
import {mapTabReducer} from './mapTabReducer'
import {appReducer} from './appReducer'
export const rootReducer = combineReducers({
  repos:reposReducer,
  issues:issuesReducer,
  mapTab:mapTabReducer,
  app:appReducer
})
