import { createStore } from 'redux'
import { list } from './reducers'

export const ADD_LIST: string = 'ADD_LIST'
export const DEL_LIST: string = 'DEL_LIST'
export const UPD_LIST: string = 'UPD_LIST'

const store = createStore( list )

export default store