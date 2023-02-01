import { Button } from 'components/Button/Button'

import { BUTTON_TYPES, ICON_POSITIONS, BUTTON_BORDERS } from 'shared/constants'

import styles from './ActorSort.module.scss'

import iconArrownUp from '../../../src/assets/arrow-up-icon.png'
import iconArrownDown from '../../../src/assets/arrow-down-icon.png'

export const ActorSort = ({ closeModal }) => {
  const handleAscendingBtnClick = () => {
    closeModal()
  }

  const handleDescendingBtnClick = () => {
    closeModal()
  }
  return (
    <>
      <Button
        text='Ascending'
        type={BUTTON_TYPES.IconEmpty}
        iconPosition={ICON_POSITIONS.Left}
        icon={iconArrownUp}
        border={BUTTON_BORDERS.BoldBoldered}
        className={styles.actorSortBtn}
        onClickEvent={handleAscendingBtnClick}
      />
      <Button
        text='Descending'
        type={BUTTON_TYPES.IconEmpty}
        iconPosition={ICON_POSITIONS.Left}
        icon={iconArrownDown}
        border={BUTTON_BORDERS.BoldBoldered}
        className={styles.actorSortBtn}
        onClickEvent={handleDescendingBtnClick}
      />
    </>
  )
}
