import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { list, add_item } from './reducers'

/** 新增 */
export const ADD_LIST = 'ADD_LIST'

/** 删除 */
export const DEL_LIST = 'DEL_LIST'

/** 修改数据 */
export const UPD_LIST = 'UPD_LIST'

/** 修改状态 */
export const UPD_DOME = 'UPD_DOME'

const store = createStore( list, applyMiddleware( thunk ) )

export default store