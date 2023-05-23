import { useState } from 'react'
import cx from 'classnames'

import { Button } from 'components/Button/Button'
import { Modal } from 'components/Modal/Modal'
import { ActorForm } from 'components/ActorForm/ActorForm'

import { BUTTON_TYPES } from 'shared/constants'

import styles from './ActorAdd.module.scss'

export const ActorAdd = ({ handleAddActorBtnClick, disableAddActorBtn, showAddActorWarningAlert }) => {
  const [showForm, setShowForm] = useState(false)

  const handleAddActorButtonClick = () => {
    if (disableAddActorBtn) {
      showAddActorWarningAlert(disableAddActorBtn)
    } else {
      setShowForm(true)
    }
  }

  const closeActorAdd = () => {
    setShowForm(false)
  }

  return (
    <div className={styles.actorAddContainer}>
      <Button
        text='Add new actor'
        type={BUTTON_TYPES.Main}
        iconPosition=''
        icon=''
        border=''
        className={cx(styles.actorAddBtn, `${disableAddActorBtn ? styles.actorAddBtnDisabled : ''}`)}
        onClickEvent={handleAddActorButtonClick}
      />

      {showForm && (
        <Modal title='Add new actor' closeModal={closeActorAdd} hasCloseBtn={true}>
          <ActorForm handleAddActorBtnClick={handleAddActorBtnClick} handleCloseModal={closeActorAdd} />
          <div className={styles.actorCancelContainer}>
            <div className={styles.actorCancelContainerBtn} onClick={closeActorAdd}>
              I changed my mind
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
