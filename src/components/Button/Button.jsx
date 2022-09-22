import cx from 'classnames'

import { UtilService } from 'services/UtilService'

import { ICON_POSITIONS } from 'shared/constants'

import styles from './Button.module.scss'

export const Button = ({ text, type, iconPosition, icon, border, className, onClickEvent }) => {
  const typeModifierClass = styles[`button${UtilService.capitalizeFirstLetter(type)}`]
  const borderModifierClass = styles[`button${UtilService.capitalizeFirstLetter(border)}`]
  return (
    <div className={cx(styles.button, typeModifierClass, borderModifierClass, className)} onClick={onClickEvent}>
      {icon && iconPosition === ICON_POSITIONS.Left && <img src={icon} alt='' />}
      {text}
      {icon && iconPosition === ICON_POSITIONS.Right && <img src={icon} alt='' />}
    </div>
  )
}
