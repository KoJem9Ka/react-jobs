import { TPosition, TReducerActionPositions } from './reducer'

export const ADD_POSITIONS = 'ADD_POSITIONS'

export const addPositions = (positions: TPosition[]): TReducerActionPositions => ({
  type: ADD_POSITIONS,
  positions,
})
