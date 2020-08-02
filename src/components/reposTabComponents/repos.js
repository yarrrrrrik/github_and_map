import React from 'react'
import RepoLink from './repo_link'
import {useSelector,useDispatch} from 'react-redux'
import {getRepos} from '../../redux/actions'
import Loader from '../loader'

const Repos = () => {

  class Repo {
    constructor(title, issues) {
      this.title = title;
      this.issues = issues
    }
  }

  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.repos)
  const loading = useSelector(state => state.repos.loading)

  if (!repos.length) {
    dispatch(getRepos())
  }

  if(loading){
    return <Loader/>
  }

  return(
      repos.map((repo,i) => <RepoLink repo={repo} key={i} />)
    )
}

export default Repos
