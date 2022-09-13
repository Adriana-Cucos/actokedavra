import cx from 'classnames'

import styles from './Hobby.module.scss'

export const Hobby = ({ text, className }) => {
  return <div className={cx(className, styles.hobby)}>{text}</div>
}
