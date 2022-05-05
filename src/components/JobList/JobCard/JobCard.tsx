import React from 'react'
import styles from './JobCard.module.scss'
import { TPosition } from '../../../store/positions/reducer'
import TagsList from '../../TagsList/TagsList'
import { TFilter } from '../../../store/filter/reducer'
import { TagItemProps } from '../../TagsList/TagItem/TagItem'

const JobCard: React.FC<TPosition> = ({
  company,
  contract,
  featured,
  id,
  languages,
  level,
  location: location1,
  logo,
  new: new1,
  position,
  postedAt,
  role,
  tools,
}) => {
  const marks: TagItemProps[] = [];
  [ '1d ago', '2d ago', '3d ago', '4d ago' ].some( item => item === postedAt ) && marks.push( { special: 'new' } )
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
      <TagsList tags={tags.map( tag => ({ tag }) )}/>
    </div>
  )
}

export default JobCard
