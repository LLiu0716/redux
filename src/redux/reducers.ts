import { ADD_LIST, DEL_LIST, UPD_LIST } from './index'
import { I_redux } from '../Type'

const data = [
  { id: 5, name: '吃饭', dome: false },
  { id: 4, name: '睡觉', dome: true },
  { id: 3, name: '游戏', dome: false },
  { id: 2, name: '唱歌', dome: true },
  { id: 1, name: '跳舞', dome: false }
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
