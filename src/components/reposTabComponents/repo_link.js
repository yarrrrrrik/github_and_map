import React from 'react'
import {useDispatch} from 'react-redux'
import {getIssues} from '../../redux/actions'

function RepoLink({repo}) {
  const dispatch = useDispatch()
  return(
    <div className="repo-link" onClick={() => dispatch(getIssues(repo))}>
      <h3>{repo.title}</h3>
    </div>
  )
}

export default RepoLink
