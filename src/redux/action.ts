import { ADD_LIST, UPD_LIST, DEL_LIST, UPD_DOME } from './index'

// 
export const add_list = ( data: any ) => {
  return { type: ADD_LIST, data }
}

export const del_list = ( data: any ) => {
  return { type: DEL_LIST, data }
}

export const upd_list = ( data: any ) => {
  return { type: UPD_LIST, data }
}

export const upd_item = ( data: any ) => {
  return { type: UPD_LIST, data }
}

// export const add_list = ( data: any ) => {
//   return { type: ADD_LIST, data }
// }
