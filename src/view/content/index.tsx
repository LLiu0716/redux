import React from 'react'

export default function Content () {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li
          className="completed editing"
        >
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label></label>
            <button className="destroy"></button>
          </div>
          <input
            className="edit"
            type="text"
          />
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Rule the web" />
        </li >
      </ul >
    </section >
  )
} 
