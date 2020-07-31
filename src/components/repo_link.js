import React from 'react'
import {useStore,connect,useSelector,useDispatch} from 'react-redux'
import {getRepos,getIssues} from '../redux/actions'

function RepoLink({repo}) {
  const dispatch = useDispatch()
  return(
    <div className="repo-link" onClick={() => dispatch(getIssues(repo))}>
      <h3>{repo.title}</h3>
    </div>
  )
}

export default RepoLink
