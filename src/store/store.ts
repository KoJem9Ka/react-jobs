import { combineReducers, createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { positionsReducer as positions, TReducerStatePositions } from './positions/reducer'
import { filtersReducer as filters, TReducerStateFilters } from './filter/reducer'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers( {
  positions,
  filters,
} )

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [ 'positions' ],
  // blacklist: [ 'filters' ],
  blacklist: [ 'positions' ],
}

const persistedReducer = persistReducer( persistConfig, rootReducer )

export const store = createStore( persistedReducer, composeWithDevTools() )

export const persistor = persistStore( store )

// export type TStoreState = ReturnType<typeof store.getState>
export type TStoreState = {
  positions: TReducerStatePositions
  filters: TReducerStateFilters
}
