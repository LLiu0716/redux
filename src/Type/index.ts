import { Store } from "redux";

export interface Mobj {
  age?: number
  id?: number
  name?: string
  dome?: boolean
}

export interface State {
  list: Mobj[]
}

export interface Props {
  store: Store
  click?: ( id: number ) => void
}

export interface OneProps {
  click: ( lsit: Mobj ) => void
}

export interface I_redux {
  type: string
  data?: Mobj
  name?: string
  mseeage?: Mobj[]
}
