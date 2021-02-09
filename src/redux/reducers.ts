import { ADD_LIST, DEL_LIST, UPD_LIST } from './index'
import { I_redux } from '../../../src/Type'

const data = [
  { age: 26, id: 5, name: '刘嘉玲' },
  { age: 24, id: 4, name: '刘德华' },
  { age: 21, id: 3, name: '关之琳' },
  { age: 23, id: 2, name: '王祖贤' },
  { age: 22, id: 1, name: '周星驰' }
]

/**
 * list 列表数据
 * @param state 维护的数据
 * @param action 必传对象里的 type
 */
export const list = ( state: any[] = data, action: I_redux ) => {
  switch ( action.type ) {
    case ADD_LIST:
      // 新增
      const arr_ADD = [ ...state, action.data ]
      return arr_ADD
    case DEL_LIST:
      // 删除
      const arr_DEL = state.filter( v => v.id !== action.data?.id )
      return arr_DEL
    case UPD_LIST:
      // 修改
      const arr_UPD = [ ...state, action.data ]
      return arr_UPD
    default:
      return state
  }
}
