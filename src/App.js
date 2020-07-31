import React from 'react'
import Repos from './components/repos'
import {connect,useDispatch} from 'react-redux'
import {getRepos} from './redux/actions'


function App(props) {


  return (
    <div className="App">
      <Repos/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {getRepos}
}

export default connect(null,{getRepos})(App);
