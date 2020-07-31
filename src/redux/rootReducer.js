import {combineReducers} from 'redux'
import {reposReducer} from './reposReducer'
import {issuesReducer} from './issuesReducer'
export const rootReducer = combineReducers({
  repos:reposReducer,
  issues:issuesReducer
})
