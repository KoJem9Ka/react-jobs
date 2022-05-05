import { TFilter, TReducerActionFilters } from './reducer'

export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const addFilter = (filter: TFilter): TReducerActionFilters => ({
  type: ADD_FILTER,
  filter,
})

export const removeFilter = (filter: TFilter): TReducerActionFilters => ({
  type: REMOVE_FILTER,
  filter,
})

export const clearFilters = (): TReducerActionFilters => ({
  type: CLEAR_FILTERS,
})
