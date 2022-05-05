import { ADD_POSITIONS } from './actions'

export type TPosition = {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export type TReducerStatePositions = TPosition[]
export type TReducerActionPositions = {
  type: typeof ADD_POSITIONS
  positions?: TPosition[]
}
type TReducerPositions = (state: TReducerStatePositions, action: TReducerActionPositions) => TReducerStatePositions

export const positionsReducer: TReducerPositions = (state: TReducerStatePositions = [], action) => {
  switch ( action.type ) {
    case ADD_POSITIONS:
      return action.positions!
  }
  return state
}
