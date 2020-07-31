import React from 'react'
import ReposTab from './components/repos-tab'
import MapTab from './components/map-tab'
// import {connect,useDispatch} from 'react-redux'
// import {getRepos} from './redux/actions'

/*

if state tab1 = true => return tab1
else return tab2
 */
 // <ReposTab/>

function App(props) {

  return (
    <div className="App">
      <MapTab/>
    </div>
  );
}

export default App
