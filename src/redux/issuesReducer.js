import * as types from './types'


const initial_state = {
  issues:[],
  loading:false
}

export const issuesReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_ISSUES:
      return {...state,issues:action.issues}
    case types.CLOSE_ISSUES:
      return state = {...state,issues:[]}
    case types.ISSUES_SHOW_LOADER:
      return {...state, loading: true}
    case types.ISSUES_HIDE_LOADER:
      return {...state, loading: false}
    default:
      return state
  }
}
