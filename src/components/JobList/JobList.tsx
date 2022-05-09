import React from 'react'
import styles from './JobList.module.scss'
import { useSelector } from 'react-redux'
import JobCard from './JobCard/JobCard'
import { TPosition } from '../../store/types'
import { TAppState } from '../../store/store'
import { selectFilters } from '../../store/features/filter-slice'
import { selectFilteredPositions } from '../../store/features/positions-slice'

const JobList: React.FC = () => {
  const filters = useSelector( selectFilters )
  const positions = useSelector<TAppState, TPosition[]>( state => selectFilteredPositions( state ) )

  return (
    <div className={styles.JobList}>
      {positions.map( position => <JobCard key={position.id} {...position} filters={filters}/> )}
    </div>
  )
}

export default JobList
