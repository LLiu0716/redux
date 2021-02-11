import React from 'react'
import { Props } from '../../Type'

import Ul from './ul'

function Content () {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <Ul />
    </section >
  )
}

export default Content
