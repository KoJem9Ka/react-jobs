import React from 'react'
import styles from './FilterPanel.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import TagsList from '../TagsList/TagsList'
import { clearFilters } from '../../store/filter/actions'
import { selectFilters } from '../../store/filter/selectors'
import { TStoreState } from '../../store/store'
import { TFilter } from '../../store/filter/reducer'

const FilterPanel: React.FC = () => {
  const filters = useSelector<TStoreState, TFilter[]>( selectFilters )
  // const filters: TFilter[] = ['123', '456']
  const dispatch = useDispatch()
  const clearHandler = () => dispatch( clearFilters() )

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
