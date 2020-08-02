import React from 'react'
import ReposTab from './components/repos-tab'
import MapTab from './components/map-tab'
import {useSelector,useDispatch} from 'react-redux'
import {reposTab,mapTab} from './redux/actions'

// import {connect,useDispatch} from 'react-redux'
// import {getRepos} from './redux/actions'

/*

if state tab1 = true => return tab1
else return tab2
 */

function App(props) {

  const API_KEY = 'AIzaSyAm0qvYvetoYR18LjkGoD12UfSc9v1MIsA'

  const dispatch = useDispatch()
  const selectedTab = useSelector(state => state.app.selectedTab)

  return (
    <div style={{ width: "100vw", height: "100vh" }} className="App">
      <button onClick={()=>dispatch(reposTab())}>Repos</button>
      <button onClick={()=>dispatch(mapTab())}>Map</button>

      {selectedTab === 1 && (
        <ReposTab/>
      )}

      {selectedTab === 2 && (
        <MapTab
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAm0qvYvetoYR18LjkGoD12UfSc9v1MIsA`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      )}


    </div>
  );
}

export default App
// googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAm0qvYvetoYR18LjkGoD12UfSc9v1MIsA&v=3.exp&libraries=geometry,drawing,places"
// loadingElement={<div style={{ height: `100%` }} />}
// containerElement={<div style={{ height: `400px` }} />}
// mapElement={<div style={{ height: `100%` }} />}
