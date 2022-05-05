import React from 'react'
import styles from './JobList.module.scss'
import { useSelector } from 'react-redux'
import { selectFilteredPositions } from '../../store/positions/selectors'
import { selectFilters } from '../../store/filter/selectors'
import { TStoreState } from '../../store/store'
import { TPosition } from '../../store/positions/reducer'
import JobCard from './JobCard/JobCard'

const JobList: React.FC = () => {
  const filters = useSelector( selectFilters )
  const positions = useSelector<TStoreState, TPosition[]>( state => selectFilteredPositions( state, filters ) )

  return (
    <div className={styles.JobList}>
      {positions.map( position => <JobCard key={position.id} {...position}/> )}
    </div>
  )
}

export default JobList
