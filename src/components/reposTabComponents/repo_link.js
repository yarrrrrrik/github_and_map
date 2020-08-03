import React from 'react'
import {useDispatch} from 'react-redux'
import {getIssues} from '../../redux/actions'

function RepoLink({repo}) {
  const dispatch = useDispatch()
  return(
    <div className="repo-link" onClick={() => dispatch(getIssues(repo))}>
      <span>{repo.title}</span>
    </div>
  )
}

export default RepoLink
