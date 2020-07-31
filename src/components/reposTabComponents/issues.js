import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {closeIssues} from '../../redux/actions'
import Issue from './issue'

function Issues() {

  const dispatch = useDispatch()
  const issues = useSelector(state => state.issues.issues)

  if(issues){
    return (
      <div>
        <button onClick={() => dispatch(closeIssues())} >Закрыть</button>
        {issues.map((issue, i) => <Issue issue={issue} key={i}/>)}

      </div>
    )
    }
  }


export default Issues
