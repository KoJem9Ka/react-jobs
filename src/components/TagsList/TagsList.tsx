import React from 'react'
import styles from './TagsList.module.scss'
import TagItem, { TagItemProps } from './TagItem/TagItem'

type TagsListProps = {
  tags: TagItemProps[]
}

const TagsList: React.FC<TagsListProps> = ({ tags }) => (
  <div className={styles.TagsList}>
    {tags.map( tagItem => <TagItem key={tagItem.tag} {...tagItem}/> )}
  </div>
)

export default TagsList
