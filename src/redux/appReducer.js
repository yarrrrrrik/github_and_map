import * as types from './types'


const initial_state = {
  selectedTab:1
}

export const appReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.REPOS_TAB:
      return {...state,selectedTab:1}
    case types.MAP_TAB:
      return state = {...state,selectedTab:2}
    default:
      return state
  }
}
