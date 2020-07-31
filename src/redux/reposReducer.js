import * as types from './types'


const initial_state = {
  repos:[]
}

export const reposReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_REPOS:
      return {...state,repos:action.repos}
    default:
      return state
  }
}
// state.repos.push(action.repo)
