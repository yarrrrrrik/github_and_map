import * as types from './types'


const initial_state = {
  cars:[],
  car:false,
  loading:false
}

export const mapTabReducer = (state = initial_state,action) => {
  switch(action.type){
    case types.GET_CARS:
      return {...state,cars:action.yekaterinburgCars}
    case types.SELECT_CAR:
      return {...state,car:action.selectedCar}
    case types.UNSELECT_CAR:
      return {...state,car:false}
    case types.SHOW_LOADER:
      return {...state, loading: true}
    case types.HIDE_LOADER:
      return {...state, loading: false}
    default:
      return state
  }
}
