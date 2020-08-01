import React,{useState} from 'react'
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {GoogleMap, withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";

function Map() {
  // const [variable,setVariable] = useState(false)
  async function getCars() {
    let request = await fetch('https://youdrive.today/info')
    let carsData = await request.json()
    let arr = []
    let yekaterinburgCars = carsData.cars.filter((car, i) => {
      if(car.latitude > 56.11 && car.latitude < 57.55 && car.longitude > 59.887 && car.longitude < 61.327){
        return car
      }
    });
    console.log(yekaterinburgCars)

  }
  getCars()
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
