import { nanoid } from 'nanoid'

import cx from 'classnames'

import { Hobby } from 'components/Hobby/Hobby'

import styles from './Hobbies.module.scss'

export const Hobbies = ({ texts, className }) => {
  return (
    <div className={cx(className, styles.hobbies)}>
      {texts.map((text) => (
        <Hobby key={nanoid()} text={text} />
      ))}
    </div>
  )
}
