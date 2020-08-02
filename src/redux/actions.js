import * as types from './types.js'

const getRepos = () => {

  class Repo{
    constructor(title,issues_url){
      this.title = title;
      this.issues_url = issues_url
    }
  }

  return async function getReposRequest(dispatch) {
    let repos = []
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
    dispatch({type:types.GET_ISSUES,issues})
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

export {getRepos,getIssues,closeIssues,getCars,selectCar,unselectCar}
