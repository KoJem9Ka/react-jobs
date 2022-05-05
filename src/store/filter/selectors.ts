import { TStoreState } from '../store'
import { TFilter } from './reducer'

export const selectFilters = (state: TStoreState): TFilter[] => state.filters
