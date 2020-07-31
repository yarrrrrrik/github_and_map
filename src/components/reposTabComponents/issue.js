import React from 'react'

function issue({issue}) {
  return(
    <a className="issue" href={issue.url}>
      <h3 >{issue.title}</h3>
    </a>
  )
}

export default issue
