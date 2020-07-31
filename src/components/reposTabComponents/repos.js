import React from 'react'
import RepoLink from './repo_link'
import {useSelector,useDispatch} from 'react-redux'
import {getRepos} from '../../redux/actions'


const Repos = () => {

  class Repo {
    constructor(title, issues) {
      this.title = title;
      this.issues = issues
    }
  }

  let reposArr = []

  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.repos)

  if (!repos.length) {
    dispatch(getRepos())
  }
  return(
      repos.map((repo,i) => <RepoLink repo={repo} key={i} />)
    )
}

export default Repos
