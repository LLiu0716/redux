import React, { Component } from 'react'

class Ul extends Component<any> {
  state = {
    name: '',
    id: null
  }

  DoubleClick ( id: number, name: string ) {
    console.log( 'id', id )
    this.setState( {
      name,
      id
    } )
  }

  checked ( id: number ) {
    console.log( 'id', id )
  }

  dellet ( id: number ) {
    console.log( 'id', id )
  }

  update ( e: any ) {
    console.log( 'val', e.target.value )
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
              <input
                className="toggle"
                type="checkbox"
                checked={ v.dome }
                onChange={ () => this.checked( v.id ) }
              />
              <label onDoubleClick={ () => this.DoubleClick( v.id, v.name ) }>
                { v.name }
              </label>
              <button
                className="destroy"
                onClick={ () => this.dellet( v.id ) }
              />
            </div>
            <input
              onChange={ ( e ) => this.update( e ) }
              className="edit"
              value={ this.state.name }
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
