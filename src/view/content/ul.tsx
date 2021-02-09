import React, { Component } from 'react'

import { Props } from '../../Type'

class Ul extends Component<Props> {
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
    this.props.store.dispatch( { type: 'UPD_DOME', data: { id } } )
    console.log( this.props.store.getState() )
  }

  dellet ( id: number ) {
    console.log( 'id', id )
    this.props.store.dispatch( { type: 'DEL_LIST', data: { id } } )
    console.log( this.props.store.getState() )
  }

  update ( e: React.ChangeEvent<HTMLInputElement> ) {
    console.log( 'val', e.target.value )
    const name = e.target.value.trim()
    if ( name ) {
      this.setState( {
        name
      } )
    }
    // this.props.store.dispatch( { type: 'DEL_LIST', data: { id } } )
    // console.log( this.props.store.getState() )
  }

  // 提交方式 回车 或者是失去焦点
  set_value ( e: React.KeyboardEvent<HTMLInputElement>, id: number, val: string ) {
    // 如果不是回车 或者不是失焦事件就不做任何处理
    if ( e.code == 'Enter' || val ) {
      // 如果得到的 value 是空就不做处理
      if ( this.state.name ) {
        const data = {
          id,
          name: this.state.name,
        }
        this.props.store.dispatch( { type: 'UPD_LIST', data } )
        console.log( this.props.store.getState() )
        this.setState( {
          id: null
        } )
      }
    }
  }

  render () {
    const list: any[] = this.props.store.getState()
    return (
      <ul className="todo-list">
        {
          list.map( v => (
            <li
              key={ v.id }
              className={ `
                ${ this.state.id == v.id ? 'editing' : '' }
                ${ v.dome ? 'completed' : '' } ` }
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
                className="edit"
                onChange={ e => this.update( e ) }
                onKeyUp={ e => this.set_value( e, v.id, '' ) }
                onBlur={ ( e: any ) => this.set_value( e, v.id, 'blur' ) }
                value={ this.state.name }
              />
            </li>
          ) )
        }
      </ul >
    )
  }
}

export default Ul
