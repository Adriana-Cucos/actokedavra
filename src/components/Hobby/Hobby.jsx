import styles from './Hobby.module.scss'

export const Hobby = ({ text }) => {
  return <div className={styles.hobby}>{text}</div>
}
