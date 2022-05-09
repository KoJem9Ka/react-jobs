import { createSlice } from '@reduxjs/toolkit'
import { TFilter } from '../types'
import { TAppState } from '../store'

const initialState = [] as TFilter[]

export const filterSlice = createSlice( {
  name: 'filters',
  initialState,
  reducers: {
    actionAddFilter: (state, action) => {
      if (!state.includes( action.payload ))
        state.push( action.payload )
    },
    actionRemoveFilter: (state, action) => state.filter( filter => filter !== action.payload ),
    actionClearFilters: () => [],
  },
} )

export const { actionAddFilter, actionClearFilters, actionRemoveFilter } = filterSlice.actions

// SELECTORS

export const selectFilters = (state: TAppState): TFilter[] => state.filters
