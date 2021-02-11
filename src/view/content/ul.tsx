import React, { Component } from 'react'
import { get_list_async, del_list_async, upd_async } from '../../redux/action'

import { Mobj, Props } from '../../Type'

import { Store } from '../../main'

import { connect } from 'react-redux'

class Ul extends Component<any>{
  state = {
    show: false,
    name: '',
    id: null
  }

  componentDidMount () {
    /**
     * 2种写法都可以
     * 前者更简洁 , 特别是在jsx中使用 , 问题是没有代码提示
     * 后者更方便 , 特别是在tsx中使用 , 好处是有代码提示
     */
    // this.props.get_list_async()
    Store.dispatch( get_list_async() )
  }

  DoubleClick ( id?: number, name?: string ) {
    this.setState( {
      name,
      id
    } )
  }

  checked ( obj?: Mobj ) {
    this.props.upd_async( obj, true )
    // console.log( Store.getState() )
  }

  dellet ( id?: number ) {
    this.props.del_list_async( id )
    // console.log( Store.getState() )
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
          this.props.upd_async( data, false )
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
    const list: Mobj[] = this.props.list || []
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
                  onChange={ () => this.checked( v ) }
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

export default connect(
  state => ( { list: state } ),
  { get_list_async, del_list_async, upd_async }
)( Ul ) 
