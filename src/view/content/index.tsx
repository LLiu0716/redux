import React from 'react'
import Ul from './Ul'

function Content ( props: any ) {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <Ul store={ props.store } />
    </section >
  )
}

export default Content
