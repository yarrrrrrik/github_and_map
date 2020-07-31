import * as types from './types.js'

const getRepos = (repos) => {
  class Repo{
    constructor(title,issues_url){
      this.title = title;
      this.issues_url = issues_url
    }
  }

  return async function getReposRequest(dispatch) {
    repos = []
    let request = await fetch(`https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&page=1&per_page=10`)
    let response = await request.json()

    response.items.forEach((item, i) => {
        let repo = new Repo(item.name,item.issues_url.substring(0,item.issues_url.indexOf('{'))) // без {/number} в конце
        repos.push(repo)
    });


   dispatch({type:types.GET_REPOS,repos})
}
}
const getIssues = (repo) => {
  return async function getIssuesRequest(dispatch) {
    let request = await fetch(repo.issues_url)
    let issues = await request.json()
    console.log(issues)
    dispatch({type:types.GET_ISSUES,issues})
  }
}
export {getRepos,getIssues}
