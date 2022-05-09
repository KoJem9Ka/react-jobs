import React from 'react'
import styles from './FilterPanel.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import TagsList from '../TagsList/TagsList'
import { TFilter } from '../../store/types'
import { TAppState } from '../../store/store'
import { actionClearFilters, selectFilters } from '../../store/features/filter-slice'

const FilterPanel: React.FC = () => {
  const filters = useSelector<TAppState, TFilter[]>( selectFilters )
  // const filters: TFilter[] = ['123', '456']
  const dispatch = useDispatch()
  const clearHandler = (): void => void dispatch( actionClearFilters() )

  return (
    <>
      {filters.length > 0 && <div className={styles.FilterSearchBox}>
        <TagsList tags={filters.map( filter => ({ tagText: filter, special: 'removable' }) )}/>
        <div className={styles.clearButton} onClick={clearHandler}>Очистить</div>
      </div>
      }
    </>
  )
}

export default FilterPanel
