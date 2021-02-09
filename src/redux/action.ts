import { Mobj } from '../Type'
import { ADD_LIST, UPD_LIST, DEL_LIST, UPD_DOME } from './index'

// 
export const add_list = ( data: Mobj ) => {
  return { type: ADD_LIST, data }
}

export const del_list = ( data: Mobj ) => {
  return { type: DEL_LIST, data }
}

export const upd_list = ( data: Mobj ) => {
  return { type: UPD_LIST, data }
}

export const upd_dome = ( data: Mobj ) => {
  return { type: UPD_DOME, data }
}

// export const add_list = ( data: any ) => {
//   return { type: ADD_LIST, data }
// }
