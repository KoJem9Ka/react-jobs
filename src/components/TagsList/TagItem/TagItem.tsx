import React, { useCallback } from 'react'
import styles from './TagItem.module.scss'
import { ReactComponent as Remove } from '../../../assets/icon-remove.svg'
import { useDispatch } from 'react-redux'
import { addFilter, removeFilter } from '../../../store/filter/actions'
import { TFilter } from '../../../store/filter/reducer'

export type TagItemProps = {
  tag?: TFilter
  special?: 'new' | 'featured' | 'removable'
}

const TagItem: React.FC<TagItemProps> = ({ tag, special }) => {
  const dispatch = useDispatch()

  const classes = [
    styles.TagItem,
    special === 'new' ? styles.new : null,
    special === 'featured' ? styles.featured : null,
    special === 'removable' ? styles.deletable : null
  ]
  switch ( special ) {
    case 'new':
      tag = 'NEW!'
      break
    case 'featured':
      tag = 'FEATURED'
  }

  const onAddFilter = useCallback( () => dispatch( addFilter( tag! ) ), [ tag ] )
  const onRemoveFilter = useCallback( () => dispatch( removeFilter( tag! ) ), [ tag ] )

  return (
    <span className={classes.join( ' ' )} onClick={!special && onAddFilter || undefined}>
      <span>{tag}</span>
      {special === 'removable' ? <div onClick={onRemoveFilter}><Remove/></div> : null}
    </span>
  )
}

export default TagItem
