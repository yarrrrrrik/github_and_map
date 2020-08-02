import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getCars,selectCar,unselectCar} from '../redux/actions'
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {GoogleMap, withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";

function Map() {
  // const [variable,setVariable] = useState(false)
  const dispatch = useDispatch()
  const cars = useSelector(state => state.mapTab.cars)
  const selectedCar = useSelector(state => state.mapTab.car)
  console.log(selectedCar);
  if (!cars.length) {
    dispatch(getCars())
  }
  return(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 56.838272, lng: 60.607088 }}
    >
    {cars.map((car,i) => (<Marker key={i} position={{lat: car.latitude,lng: car.longitude}}
     onClick={() => {
      dispatch(selectCar(car))
    }}
    />))})
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
        <div>
          <h2>{selectedCar.model}</h2>
          <p>{selectedCar.transmission}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  )

}
const MapTab = withScriptjs(withGoogleMap(Map));
// {variable && (<InfoWindow position={{lat: 56.838272, lng: 60.607088 }}><h1>y</h1></InfoWindow>)}

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAm0qvYvetoYR18LjkGoD12UfSc9v1MIsA')
// })(MapTab)
export default MapTab
// AIzaSyAm0qvYvetoYR18LjkGoD12UfSc9v1MIsA
// export default MapTab
