import { createStore } from 'redux'
import { list, add_item } from './reducers'

export const ADD_LIST: string = 'ADD_LIST'
export const DEL_LIST: string = 'DEL_LIST'
export const UPD_LIST: string = 'UPD_LIST'
export const UPD_DOME: string = 'UPD_DOME'

const store = createStore( list )

export default store