import cx from 'classnames'

import styles from './Actor.module.scss'

const Actor = ({ name, score, hobbies, description, className }) => {
  return (
    <ul className={cx(styles.actor, className)}>
      <li>Name: {name}</li>
      <li>Score: {score} </li>
      <li>Hobbies: {hobbies}</li>
      <li>Description: {description}</li>
    </ul>
  )
}

export { Actor }
