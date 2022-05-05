import React, { useCallback } from 'react'
import styles from './TagItem.module.scss'
import { ReactComponent as Remove } from '../../../assets/icon-remove.svg'
import { useDispatch } from 'react-redux'
import { addFilter, removeFilter } from '../../../store/filter/actions'
import { TFilter } from '../../../store/filter/reducer'

export type TagItemProps = {
  tagText?: TFilter
  special?: 'new' | 'featured' | 'removable'
  active?: boolean
}

const TagItem: React.FC<TagItemProps> = ({ tagText, special, active = false }) => {
  const dispatch = useDispatch()

  const classes = [
    styles.TagItem,
    active ? styles.active : null,
    special === 'new' ? styles.new : null,
    special === 'featured' ? styles.featured : null,
    special === 'removable' ? styles.deletable : null
  ]
  switch ( special ) {
    case 'new':
      tagText = 'NEW!'
      break
    case 'featured':
      tagText = 'FEATURED'
  }

  const onAddFilter = useCallback( () => dispatch( addFilter( tagText! ) ), [ tagText ] )
  const onRemoveFilter = useCallback( () => dispatch( removeFilter( tagText! ) ), [ tagText ] )

  return (
    <span className={classes.join( ' ' )} onClick={!special && onAddFilter || undefined}>
      <span>{tagText}</span>
      {special === 'removable' ? <div onClick={onRemoveFilter}><Remove/></div> : null}
    </span>
  )
}

export default TagItem
