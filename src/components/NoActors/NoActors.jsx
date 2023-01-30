import { Button } from 'components/Button/Button'

import { BUTTON_TYPES } from 'shared/constants'

import styles from './NoActors.module.scss'

import emojiSad from '../../assets/emoji-sad.svg'

export const NoActors = ({ closeNoActors }) => {
  const handleAddNewActorClick = () => {
    closeNoActors()
  }
  return (
    <div className={styles.notificationPage}>
      <div className={styles.pageMessage}>
        <img src={emojiSad} alt='' />
        <div className={styles.messageContainer}>
          <div className={styles.messageContainerText}>There are no actors here.</div>
          <div className={styles.messageContainerText}>Consider adding one.</div>
        </div>
        <Button
          text='Add new actor'
          type={BUTTON_TYPES.Main}
          iconPosition=''
          icon=''
          border=''
          className={styles.buttonContainer}
          onClickEvent={handleAddNewActorClick}
        />
      </div>
    </div>
  )
}
