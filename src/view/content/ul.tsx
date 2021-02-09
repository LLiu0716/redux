import React from 'react'

function Ul ( props: any ) {
  console.log( ' props: any', props.store.getState() )
  const list: any[] = props.store.getState()
  return (
    <ul className="todo-list">
      { list.map( v => (
        <li key={ v.id } className='completed'>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label onClick={ () => console.log( v.id ) }>{ v.name }</label>
            <button
              className="destroy"
              onClick={ () => console.log( v.id ) }
            ></button>
          </div>
          <input
            onChange={ () => console.log( '777' ) }
            className="edit" value={ v.name }
          />
        </li>
      ) ) }
      {/* <li
        className="completed editing"
      >
      </li> */}
    </ul >
  )
}

export default Ul
