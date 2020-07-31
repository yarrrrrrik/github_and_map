import React from 'react'
import Repos from './reposTabComponents/repos'
import Issues from './reposTabComponents/issues'
// import {connect,useDispatch} from 'react-redux'
// import {getRepos} from './redux/actions'


function ReposTab(props) {

  return (
    <div className="App">
      <Repos/>
      <Issues/>
    </div>
  );
}

export default ReposTab
