import React from 'react'
import styles from './JobCard.module.scss'
import TagsList from '../../TagsList/TagsList'
import { TagItemProps } from '../../TagsList/TagItem/TagItem'
import { TFilter, TPosition } from '../../../store/types'

const JobCard: React.FC<TPosition & { filters: TFilter[] }> = ({
  company,
  contract,
  featured,
  languages,
  level,
  location: location1,
  logo,
  new: new1,
  position,
  postedAt,
  role,
  tools,
  filters,
}) => {
  const marks: TagItemProps[] = []
  new1 && marks.push( { special: 'new' } )
  featured && marks.push( { special: 'featured' } )

  const tags: TFilter[] = [ role, level, ...languages, ...tools ]

  return (
    <div className={styles.JobCard}>
      <img alt={company} src={logo}/>
      <div className={styles.main}>
        <div>
          <h3>{company}</h3>
          <TagsList tags={marks}/>
        </div>
        <h2>{position}</h2>
        <div>{[ postedAt, contract, location1 ].join( ' • ' )}</div>
      </div>
      <TagsList tags={tags.map( tag => ({ tagText: tag, active: filters.includes( tag ) }) )}/>
    </div>
  )
}

export default JobCard
