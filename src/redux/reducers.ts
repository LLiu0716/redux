import { ADD_LIST, DEL_LIST, UPD_LIST, UPD_DOME } from './index'
import { I_redux, Mobj } from '../Type'

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
export const list = ( state: Mobj[] = data, action: I_redux ): any[] => {
  console.log( 'action.data', action.data )
  switch ( action.type ) {
    case ADD_LIST:
      // 新增
      const LIST_ADD = [ action.data, ...state ]
      return LIST_ADD
    case DEL_LIST:
      // 删除
      const LIST_DEL = state.filter( v => v.id !== action.data?.id )
      return LIST_DEL
    case UPD_LIST:
      // 修改数据
      const LIST_UPD = [ ...state ]
      LIST_UPD.forEach( v => {
        if ( v.id === action.data?.id ) {
          v.name = action.data?.name
        }
      } )
      return LIST_UPD
    case UPD_DOME:
      // 修改状态
      const DOME_UPD = [ ...state ]
      DOME_UPD.forEach( v => {
        if ( v.id === action.data?.id ) {
          v.dome = !v.dome
        }
      } )
      return DOME_UPD
    default:
      return state
  }
}

/**
 * add_item 输入框内的 value
 * @param state 维护的数据
 * @param action 必传对象里的 type
 */
export const add_item = ( state: string = '', action: I_redux ): string => {
  switch ( action.type ) {
    case ADD_LIST:
      // 新增
      return state = action.name as string
    case DEL_LIST:
      // 删除
      return state = ''
    default:
      return state
  }
}
