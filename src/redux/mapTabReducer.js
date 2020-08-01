import * as types from './types'


const initial_state = {
  cars:[],
}

export const mapTabReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_CARS:
      console.log(action)
      return {...state,cars:action.yekaterinburgCars}
    default:
      return state
  }
}
