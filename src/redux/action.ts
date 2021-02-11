import { AnyAction } from 'redux'
import { Mobj } from '../Type'
import { ADD_LIST, UPD_LIST, DEL_LIST, UPD_DOME, GET_LIST } from './index'

const URL = 'http://localhost:8080'

// 同步 action
export const add_list = ( data: Mobj ): AnyAction => {
  return { type: ADD_LIST, data }
}

export const del_list = ( data: Mobj ): AnyAction => {
  return { type: DEL_LIST, data }
}

export const upd_list = ( data: Mobj ): AnyAction => {
  return { type: UPD_LIST, data }
}

export const upd_dome = ( data: Mobj ): AnyAction => {
  return { type: UPD_DOME, data }
}

export const get_list = ( mseeage: Mobj[] ): AnyAction => {
  return { type: GET_LIST, mseeage }
}

// 异步 action
export const get_list_async = (): AnyAction => {
  let res: any = ( dispatch: any ) => {
    fetch( `${ URL }/data` )
      .then( res => res.json() )
      .then( res => {
        console.log( 'res', res )
        dispatch( { type: GET_LIST, mseeage: res.list } )
      } )
      .catch( err => err )
  }
  return res
}
