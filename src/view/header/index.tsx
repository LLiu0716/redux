import React, { Component } from 'react'

import { Props } from '../../Type'

import { add_list_async } from '../../redux/action'

class Content extends Component<Props> {
  state = {
    value: ''
  }

  input_value ( e: React.ChangeEvent<HTMLInputElement> ) {
    // 去除首尾空格 , 并且判断是否为空
    const value = e.target.value.trim()
    if ( value ) {
      this.setState( {
        value
      } )
    }
  }

  // 提交方式 回车 或者是失去焦点
  set_value ( e: React.KeyboardEvent<HTMLInputElement>, val: string ) {
    // 如果不是回车 或者不是失焦事件就不做任何处理
    if ( e.code == 'Enter' || val ) {
      // 如果得到的 value 是空就不做处理
      if ( this.state.value ) {
        const data = {
          id: Date.now(),
          name: this.state.value,
          dome: false
        }
        this.props.store.dispatch( add_list_async( data ) )
        console.log( this.props.store.getState() )
        this.setState( {
          value: ''
        } )
      }
    }
  }

  render () {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={ e => this.input_value( e ) }
          onKeyUp={ e => this.set_value( e, '' ) }
          onBlur={ ( e: any ) => this.set_value( e, 'blur' ) }
          value={ this.state.value }
        />
      </header>
    )
  }
}
export default Content
