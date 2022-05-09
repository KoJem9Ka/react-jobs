import { createSlice } from '@reduxjs/toolkit'
import { TPosition } from '../types'
import { TAppState } from '../store'

const initialState = [] as TPosition[]

export const positionsSlice = createSlice( {
  name: 'positions',
  initialState,
  reducers: {
    actionSetPositions: (_, action) => action.payload,
  },
} )

export const { actionSetPositions } = positionsSlice.actions

// SELECTORS

export const selectAllPositions = (state: TAppState): TPosition[] => state.positions

export const selectFilteredPositions = (state: TAppState): TPosition[] => {
  if (!state.filters.length) return state.positions
  return state.positions.filter( position => {
    const positionTags: string[] = [ position.role, position.level, ...position.languages, ...position.tools ]
    return state.filters.every( filter => positionTags.includes( filter ) )
  } )
}
