import * as types from './types'


const initial_state = {
  repos:[],
  loading:false,
}

export const reposReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_REPOS:
      return {...state,repos:action.repos,}
    case types.REPOS_SHOW_LOADER:
      return {...state, loading: true}
    case types.REPOS_HIDE_LOADER:
      return {...state, loading: false}
    default:
      return state
  }
}
