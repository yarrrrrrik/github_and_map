import React from 'react'
import Repos from './reposTabComponents/repos'
import Issues from './reposTabComponents/issues'
import {useSelector} from 'react-redux'


function ReposTab(props) {

  const hidden = useSelector(state => state.issues.hiddenRepos) //костыль

  return (
    <div className="repos-tab">
      <div className={`repos-tab__repos ${hidden}`}>
        <Repos/>
      </div>
      <div className='repos-tab__issues'>
        <Issues/>
      </div>
    </div>
  );
}

export default ReposTab
