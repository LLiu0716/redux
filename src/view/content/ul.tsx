import React, { Component } from 'react'

class Ul extends Component<any> {
  state = {
    id: null
  }

  DoubleClick ( id: number ) {
    console.log( 'id', id )
    this.setState( {
      id
    } )
  }

  render () {
    const list: any[] = this.props.store.getState()
    return (
      <ul className="todo-list">
        { list.map( v => (
          <li
            key={ v.id }
            className={ `${ this.state.id == v.id ? 'editing' : '' } ${ v.dome ? 'completed' : '' }` }
          // className={ v.dome ? 'completed' : '' }
          >
            <div className="view">
              <input className="toggle" type="checkbox" checked={ v.dome } />
              <label
                onDoubleClick={ () => this.DoubleClick( v.id ) }
              >
                { v.name }
              </label>
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
        ) )
        }
        {/* <li
          className="completed editing"
        >
        </li> */}
      </ul >
    )
  }
}

export default Ul
