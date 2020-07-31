import * as types from './types'


const initial_state = {
  issues:[]
}

export const repoReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_ISSUES:
      return {...state,issues:action.issues}
    default:
      return state
  }
}
