import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getCars,selectCar,unselectCar} from '../redux/actions'
import {GoogleMap, withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";
import Loader from './loader'

function Map() {
  const dispatch = useDispatch()
  const cars = useSelector(state => state.mapTab.cars)
  const selectedCar = useSelector(state => state.mapTab.car)
  const loading = useSelector(state => state.mapTab.loading)

  if (!cars.length) {
    dispatch(getCars())
  }

  if(loading){
    return <Loader/>
  }

  return(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 56.838272, lng: 60.607088 }}
    >
    {cars.map((car,i) => (<Marker
      key={i}
      position={{lat: car.latitude,lng: car.longitude}}
      onClick={() => {dispatch(selectCar(car))}}
    />))}
  )
    {selectedCar && (
      <InfoWindow
        onCloseClick={() => {
          dispatch(unselectCar())
        }}
        position={{
          lat: selectedCar.latitude,
          lng: selectedCar.longitude
        }}
      >
        <div className='car-info'>
          <img src={selectedCar.img} alt={selectedCar.model} className='car-info__img'/>
          <h2 className='car-info__title'>{selectedCar.model}</h2>
          <p className='car-info__transmisson'>Transmission: {selectedCar.transmission}</p>
          <p className='car-info__fuel'>Fuel:{selectedCar.fuel}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  )
  

}
const MapTab = withScriptjs(withGoogleMap(Map));

export default MapTab
