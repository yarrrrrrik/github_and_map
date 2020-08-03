import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {closeIssues} from '../../redux/actions'
import Issue from './issue'
import Loader from '../loader'
function Issues() {

  const dispatch = useDispatch()
  const issues = useSelector(state => state.issues.issues)
  const loading = useSelector(state => state.issues.loading)
  const hidden = useSelector(state => state.issues.hidden)


  if(loading){
    return <Loader/>
  }

  if(issues.length){
    return (
      <div className={`issues ${hidden}`}>
        <button onClick={() => dispatch(closeIssues())} >Закрыть</button>
        {issues.map((issue, i) => <Issue issue={issue} key={i}/>)}
      </div>
    )
    }
    return <h2 className="issues-title hidden"> Выберите репозиторий </h2>
  }


export default Issues
