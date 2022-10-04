import { useState, useEffect } from 'react'

import cx from 'classnames'

import { UtilService } from 'services/UtilService'

import styles from './Alert.module.scss'

export const Alert = ({ type, text, closeAlert, autoclose }) => {
  const [cssTop, setCssTop] = useState('-100%')

  const typeModifierClass = styles[`alert${UtilService.capitalizeFirstLetter(type)}`]

  const handleCloseAlert = () => {
    setCssTop('-100%')
    window.setTimeout(() => {
      closeAlert()
    }, 400)
  }

  useEffect(() => {
    setCssTop('53px')
  }, [])

  return (
    <div className={cx(styles.alert, typeModifierClass)} style={{ top: `${cssTop}` }}>
      <div className={styles.alertIcon}></div>
      <div className={styles.alertText}>{text}</div>
      <div className={styles.alertCloseIcon} onClick={handleCloseAlert}></div>
    </div>
  )
}
