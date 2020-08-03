import React from 'react'

function issue({issue}) {
  return(
    <a className="issues__issue" href={issue.html_url}>
      <span >{issue.title}</span>
    </a>
  )
}

export default issue
