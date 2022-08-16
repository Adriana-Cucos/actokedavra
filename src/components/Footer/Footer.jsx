import { UtilService } from 'services/UtilService'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerDate}>{UtilService.getDayMonthYear(new Date())}</div>
      <div className={styles.footerLogo}>ActoKedavra</div>
    </div>
  )
}
