import cx from 'classnames'

import styles from './ReadMore.module.scss'

export const ReadMore = ({ className, limit, children }) => {
  const readMoreText = limit < children.length ? `${children.slice(0, limit)}...` : children

  return <div className={cx(styles.description, className)}>{readMoreText}</div>
}
