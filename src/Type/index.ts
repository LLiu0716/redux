export interface Mobj {
  age?: number
  id?: number
  name?: string
}

export interface State {
  list: Mobj[]
}

export interface Props {
  store: any
  click: ( id: number ) => void
}

export interface OneProps {
  click: ( lsit: Mobj ) => void
}

export interface I_redux {
  type: string
  data?: Mobj
  name?: string
}
