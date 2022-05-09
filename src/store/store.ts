import { configureStore } from '@reduxjs/toolkit'
import { positionsSlice } from './features/positions-slice'
import { filterSlice } from './features/filter-slice'

export const store = configureStore( {
  reducer: {
    positions: positionsSlice.reducer,
    filters: filterSlice.reducer,
  },
  devTools: true,
} )

export type TAppState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
