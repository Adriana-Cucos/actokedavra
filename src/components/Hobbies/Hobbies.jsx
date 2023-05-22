import { nanoid } from 'nanoid'

import cx from 'classnames'

import { Hobby } from 'components/Hobby/Hobby'

import styles from './Hobbies.module.scss'

export const Hobbies = ({ texts, className }) => {
  const textHobbies = window.Array.isArray(texts) ? texts : []

  return (
    <div className={cx(className, styles.hobbies)}>
      {textHobbies.map((text) => text.trim() && <Hobby key={nanoid()} text={text} />)}
    </div>
  )
}
