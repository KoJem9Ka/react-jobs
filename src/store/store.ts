import { combineReducers, createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { positionsReducer as positions, TReducerStatePositions } from './positions/reducer'
import { filtersReducer as filters, TReducerStateFilters } from './filter/reducer'

const rootReducer = combineReducers( {
  positions,
  filters,
} )

export const store = createStore( rootReducer, composeWithDevTools() )

// export type TStoreState = ReturnType<typeof store.getState>
export type TStoreState = {
  positions: TReducerStatePositions
  filters: TReducerStateFilters
}
