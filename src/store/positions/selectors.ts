import { TStoreState } from '../store'
import { TPosition } from './reducer'

export const selectAllPositions = (state: TStoreState): TPosition[] => state.positions

export const selectFilteredPositions = (state: TStoreState, filters: string[]): TPosition[] => {
  if (!filters.length) return state.positions
  return state.positions.filter( position => {
    const positionTags: string[] = [ position.role, position.level, ...position.languages, ...position.tools ]
    return filters.every( filter => positionTags.includes( filter ) )
  } )
}
