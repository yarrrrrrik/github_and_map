import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {closeIssues} from '../../redux/actions'
import Issue from './issue'
import Loader from '../loader'
function Issues() {

  const dispatch = useDispatch()
  const issues = useSelector(state => state.issues.issues)

  const loading = useSelector(state => state.issues.loading)

  if(loading){
    return <Loader/>
  }

  if(issues.length){
    return (
      <div>
        <button onClick={() => dispatch(closeIssues())} >Закрыть</button>
        {issues.map((issue, i) => <Issue issue={issue} key={i}/>)}

      </div>
    )
    }
    return <div> Выберите репозиторий </div>
  }


export default Issues
