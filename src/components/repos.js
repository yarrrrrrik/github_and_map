import React, {useEffect} from 'react'
import RepoLink from './repo_link'
import {useStore,connect,useSelector,useDispatch} from 'react-redux'
import {getRepos,getIssues} from '../redux/actions'


const Repos = () => {

  class Repo {
    constructor(title, issues) {
      this.title = title;
      this.issues = issues
    }
  }

  let reposArr = []

  // let store = useStore()

  // async function getReposRequest({repos}) {
  //   await store.dispatch(getRepos())
  // }
  // getReposRequest()

  // useSelector(state => {sth = state}) // если useSelector что-то возвращает, то происходит бесконечный dispatch(???????)

  // store.subscribe(() => {
  //   reposArr = store.getState().repos.repos
  //   console.log(reposArr);
  // })
  // return <li key={i}>item.title</li>
  // reposArr.map((item, i) => {
  //   console.log(reposArr)
  //   return <li></li>
  // })

  // reposArr.forEach((item, i) => {
  //   console.log('yes')
  // })
  // if (!reposArr.length) {
  //   return <button>
  //     Загрузить </button>
  // }
  // return (reposArr.map((item, i) => {<li>{item}</li>}))
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.repos)
  if (!repos.length) {
    dispatch(getRepos())
  }
  return repos.map((repo,i) => <RepoLink repo={repo} key={i} />)
}

// export default Repos
// const mapStateToProps = state => {
//   return {
//     repos: state.repos.repos
//   }
// }

// export default connect(mapStateToProps, null)(Repos)
export default Repos
