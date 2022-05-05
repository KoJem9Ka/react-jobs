import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from './actions'

export type TFilter = string

export type TReducerStateFilters = TFilter[]
export type TReducerActionFilters = {
  type: typeof ADD_FILTER | typeof REMOVE_FILTER | typeof CLEAR_FILTERS
  filter?: TFilter
}
type TReducerFilters = (state: TReducerStateFilters, action: TReducerActionFilters) => TReducerStateFilters

export const filtersReducer: TReducerFilters = (state: TReducerStateFilters = [], action) => {
  switch ( action.type ) {
    case ADD_FILTER:
      return state.includes( action.filter! ) ? state : state.concat( action.filter! )
    case REMOVE_FILTER:
      return state.filter( filter => filter !== action.filter )
    case CLEAR_FILTERS:
      return []
    default:
      return state
  }
  return state
}
