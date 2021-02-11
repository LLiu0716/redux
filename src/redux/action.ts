import { Mobj } from '../Type'
import { ADD_LIST, UPD_LIST, DEL_LIST, UPD_DOME, GET_LIST } from './index'

const URL = 'http://localhost:8080'

// 同步 action
const add_list = ( data: Mobj ) => {
  return { type: ADD_LIST, data }
}

const del_list = ( data: Mobj ) => {
  return { type: DEL_LIST, data }
}

const upd_list = ( data?: Mobj ) => {
  return { type: UPD_LIST, data }
}

const upd_dome = ( data?: Mobj ) => {
  return { type: UPD_DOME, data }
}

const get_list = ( mseeage: Mobj[] ) => {
  return { type: GET_LIST, mseeage }
}

// *_async 异步 action
/**
 * 获取数据异步函数
 */
export const get_list_async = () => {
  let res: any = ( dispatch: any ) => {
    fetch( `${ URL }/data` )
      .then( res => res.json() )
      .then( res => {
        dispatch( get_list( res ) )
      } )
      .catch( err => err )
  }
  return res
}

/**
 * 新增数据异步函数
 * @param data 新增数据对象
 */
export const add_list_async = ( data: Mobj ) => {
  let res: any = ( dispatch: any ) => {
    fetch( `${ URL }/data`, {
      method: 'POST',
      body: JSON.stringify( data ),
      // 连编译格式都要写 , 还有没有王法了 !!!
      headers: { 'content-type': 'application/json' }
    } )
      .then( res => res.json() )
      .then( res => {
        // 实际开发直接调获取数据函数就可以了做到页面刷新
        dispatch( add_list( data ) )
      } )
      .catch( err => err )
  }
  return res
}

/**
 * 删除数据异步函数
 * @param id 要删除的数据的 ID
 */
export const del_list_async = ( id?: number ) => {
  let res: any = ( dispatch: any ) => {
    fetch( `${ URL }/data/${ id }`, { method: 'DELETE' } )
      .then( res => res.json() )
      .then( res => {
        // 实际开发直接调获取数据函数就可以了做到页面刷新
        console.log( 'res', res )
        dispatch( del_list( { id } ) )
      } )
      .catch( err => err )
  }
  return res
}

/**
 * 修改数据异步函数
 * @param obj 要修改状态的数据对象
 * @param dome false 修改名称 , true 修改状态
 */
export const upd_async = ( obj?: Mobj, dome?: boolean ) => {
  console.log( 'obj', obj )
  // 我草 , 什么鬼函数 , 居然没有只修改某一项的请求方式
  let data: Mobj = {}
  if ( dome ) {
    data = {
      id: obj?.id,
      dome: !obj?.dome,
      name: obj?.name
    }
  } else {
    data = {
      id: obj?.id,
      dome: dome,
      name: obj?.name
    }
  }
  let res: any = ( dispatch: any ) => {
    fetch( `${ URL }/data/${ obj?.id }`, {
      method: 'PUT',
      body: JSON.stringify( data ),
      // 连编译格式都要写 , 还有没有王法了 !!!
      headers: { 'content-type': 'application/json' }
    } )
      .then( res => res.json() )
      .then( res => {
        console.log( 'res', res )
        // 实际开发直接调获取数据函数就可以了做到页面刷新
        if ( dome ) {
          dispatch( upd_dome( obj ) )
        } else {
          dispatch( upd_list( obj ) )
        }
      } )
      .catch( err => err )
  }
  return res
}
