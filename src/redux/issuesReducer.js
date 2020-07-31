import * as types from './types'


const initial_state = {
  issues:[]
}

export const issuesReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_ISSUES:
      return {...state,issues:action.issues}
    case types.CLOSE_ISSUES:
      return state = {...state,issues:[]}
    default:
      return state
  }
}
