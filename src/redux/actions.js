import * as types from './types.js'

const getRepos = () => {

  class Repo{
    constructor(title,issues_url){
      this.title = title;
      this.issues_url = issues_url
    }
  }

  return async function getReposRequest(dispatch) {
    dispatch(reposShowLoader())

    let request = await fetch(`https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&page=1&per_page=25`)
    let response = await request.json()

    let repos = response.items.map((item, i) => {
        return new Repo(item.name,item.issues_url.substring(0,item.issues_url.indexOf('{')))
    });

   dispatch({type:types.GET_REPOS,repos})
   dispatch(reposHideLoader())

}
}

const getIssues = (repo) => {

  return async function getIssuesRequest(dispatch) {
    dispatch(issuesShowLoader())
    let request = await fetch(repo.issues_url)
    let issues = await request.json()
    dispatch({type:types.GET_ISSUES,issues})
    dispatch(issuesHideLoader())

  }
}

const closeIssues = () => ({type:types.CLOSE_ISSUES})

const getCars = () => {
  return async function getCarsRequest(dispatch){

  let request = await fetch('https://youdrive.today/info')
  let carsData = await request.json()
  let yekaterinburgCars = carsData.cars.filter((car, i) => {
    if(car.latitude > 56.11 && car.latitude < 57.55 && car.longitude > 59.887 && car.longitude < 61.327){
      return car
    }
  }
)
  dispatch({type:types.GET_CARS,yekaterinburgCars})
}
}

const selectCar = (selectedCar) =>({type:types.SELECT_CAR,selectedCar})

const unselectCar = () => ({type:types.UNSELECT_CAR})

const reposTab = () => ({type:types.REPOS_TAB})

const mapTab = () => ({type:types.MAP_TAB})

const reposShowLoader = () => ({type:types.REPOS_SHOW_LOADER})

const reposHideLoader = () => ({type:types.REPOS_HIDE_LOADER})

const issuesShowLoader = () => ({type:types.ISSUES_SHOW_LOADER})

const issuesHideLoader = () => ({type:types.ISSUES_HIDE_LOADER})

export {getRepos,getIssues,closeIssues,getCars,selectCar,unselectCar,reposTab,mapTab,reposShowLoader,reposHideLoader,issuesShowLoader,issuesHideLoader}
