import React, { Component } from 'react'
import { del_list, upd_dome, upd_list, get_list_async, get_list } from '../../redux/action'

import { Mobj, Props } from '../../Type'

class Ul extends Component<Props> {
  state = {
    show: false,
    name: '',
    id: null
  }

  componentDidMount () {
    this.props.store.dispatch( get_list_async() )
  }

  DoubleClick ( id?: number, name?: string ) {
    this.setState( {
      name,
      id
    } )
  }

  checked ( id?: number ) {
    this.props.store.dispatch( upd_dome( { id } ) )
    console.log( this.props.store.getState() )
  }

  dellet ( id?: number ) {
    this.props.store.dispatch( del_list( { id } ) )
    console.log( this.props.store.getState() )
  }

  update ( e: React.ChangeEvent<HTMLInputElement> ) {
    const name = e.target.value.trim()
    this.setState( {
      show: true,
      name
    } )
  }

  // 提交方式 回车 或者是失去焦点
  set_value ( e: React.KeyboardEvent<HTMLInputElement>, val: string, id?: number ) {
    // 如果不是回车 或者不是失焦事件就不做任何处理
    if ( e.code == 'Enter' || val ) {
      // 如果得到的 value 是空就不做处理
      if ( this.state.show ) {
        if ( this.state.name.trim() ) {
          const data = {
            id,
            name: this.state.name,
          }
          this.props.store.dispatch( upd_list( data ) )
          console.log( this.props.store.getState() )
        } else {
          this.dellet( id )
        }
      }
      this.setState( {
        name: '',
        id: null,
        show: false
      } )
    }
  }

  class_name ( v: Mobj ) {
    return (
      `${ this.state.id === v.id ? 'editing ' : '' }${ v.dome ? 'completed' : '' }`.trim()
    )
  }

  render () {
    const list: Mobj[] = this.props.store.getState() || []
    console.log( 'list =>', list )
    return (
      <ul className="todo-list">
        {list.length ?
          list.map( v => (
            <li
              key={ v.id }
              className={ this.class_name( v ) }
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
                value={ this.state.name }
                autoFocus={ this.state.id === v.id }
                onChange={ e => this.update( e ) }
                onKeyUp={ e => this.set_value( e, '', v.id ) }
                onBlur={ ( e: any ) => this.set_value( e, 'blur', v.id ) }
              />
            </li>
          ) ) :
          <li></li>
        }
      </ul >
    )
  }
}

export default Ul
