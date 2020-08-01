import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getCars} from '../redux/actions'
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {GoogleMap, withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";

function Map() {
  // const [variable,setVariable] = useState(false)
  const dispatch = useDispatch()
  const cars = useSelector(state => state.mapTab.cars)

  if (!cars.length) {
    dispatch(getCars())
  }
  return(
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 56.838272, lng: 60.607088 }}
    >
    <Marker position={{ lat: 56.838272, lng: 60.607088 }} onClick={() => {}}/>
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
