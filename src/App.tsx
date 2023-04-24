import { useState } from 'react'

import './App.css'

import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Button } from './components/Button/Button'
import { ReadMore } from 'components/ReadMore/ReadMore'
import { Hobbies } from 'components/Hobbies/Hobbies'
import { Modal } from 'components/Modal/Modal'
import { Alert } from 'components/Alert/Alert'
import { NoActors } from 'components/NoActors/NoActors'
import { ActorDetails } from 'components/ActorDetails/ActorDetails'

import { BUTTON_TYPES, ICON_POSITIONS, BUTTON_BORDERS, ALERT_TYPES } from 'shared/constants'
import { ACTOR } from 'data'

import styles from './App.module.scss'

import iconArrow from './assets/arrow-chevron-down.png'
import iconPen from './assets/pen-icon.png'
import iconDelete from './assets/delete-icon.png'
import { ActorSort } from 'components/ActorSort/ActorSort'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showNoActors, setShowNoActors] = useState(false)
  const [showActorSort, setShowActorSort] = useState(false)

  // General button click event
  const handleButtonClick = () => {
    console.log('Clicked')
  }

  const handleSortClick = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleAlertClick = () => {
    setShowAlert(true)
  }

  const closeAlert = () => {
    setShowAlert(false)
  }

  const handleNoActorsClick = () => {
    setShowNoActors(true)
  }

  const closeNoActors = () => {
    setShowNoActors(false)
  }

  const handleActorSortClick = () => {
    setShowActorSort(true)
  }

  const closeActorSort = () => {
    setShowActorSort(false)
  }

  return (
    <div className={`${styles.app} app`}>
      <Header />
      {!showNoActors && (
        <div className={`${styles.appContent} appComponent`}>
          {showAlert && (
            <Alert
              type={ALERT_TYPES.Success}
              text='Actor added successfully'
              closeAlert={closeAlert}
              autoclose={true}
            />
          )}
          <Button
            text='Modal'
            type={BUTTON_TYPES.Full}
            iconPosition=''
            icon=''
            border={BUTTON_BORDERS.Bordered}
            className={styles.appComponent}
            onClickEvent={handleSortClick}
          />
          <Button
            text='Alert'
            type={BUTTON_TYPES.Full}
            iconPosition=''
            icon=''
            border={BUTTON_BORDERS.Bordered}
            className={styles.appComponent}
            onClickEvent={handleAlertClick}
          />
          <Button
            text='No Actors'
            type={BUTTON_TYPES.Full}
            iconPosition=''
            icon=''
            border={BUTTON_BORDERS.Bordered}
            className={styles.appComponent}
            onClickEvent={handleNoActorsClick}
          />
          <Button
            text='Sort'
            type={BUTTON_TYPES.Full}
            iconPosition=''
            icon=''
            border={BUTTON_BORDERS.Bordered}
            className={styles.appComponent}
            onClickEvent={handleActorSortClick}
          />
          <Button
            text=''
            type={BUTTON_TYPES.Round}
            iconPosition=''
            icon=''
            border=''
            className={styles.appComponent}
            onClickEvent={handleButtonClick}
          />
          <Button
            text='Read more'
            type={BUTTON_TYPES.Expandable}
            iconPosition={ICON_POSITIONS.Right}
            icon={iconArrow}
            border=''
            className={styles.appComponent}
            onClickEvent={handleButtonClick}
          />
          <Button
            text='Edit'
            type={BUTTON_TYPES.EmptyIcon}
            iconPosition={ICON_POSITIONS.Right}
            icon={iconPen}
            border={BUTTON_BORDERS.Bordered}
            className={styles.appComponent}
            onClickEvent={handleButtonClick}
          />
          <Button
            text='Add new actor'
            type={BUTTON_TYPES.Main}
            iconPosition=''
            icon=''
            border=''
            className={styles.appComponent}
            onClickEvent={handleButtonClick}
          />
          <Button
            text='Delete'
            type={BUTTON_TYPES.IconEmpty}
            iconPosition={ICON_POSITIONS.Left}
            icon={iconDelete}
            border={BUTTON_BORDERS.BoldBoldered}
            className={styles.appComponent}
            onClickEvent={handleButtonClick}
          />
          <ReadMore
            className={styles.appComponent}
            limit={59}
            text='It&apos;s easy to believe Leonardo DiCaprio really is the "king" of the movie industry. He is also good looking.'
            labelStart='Read more'
            labelEnd='Read less'
          />
          <Hobbies texts={['Traveling', 'Reading', 'Dancing', 'Blogging']} className={styles.appComponent} />
          {showModal && (
            <Modal title='Title' closeModal={closeModal} hasCloseBtn={true}>
              Test
            </Modal>
          )}
          {showActorSort && (
            <Modal title='Select type of sort' closeModal={closeActorSort} hasCloseBtn={true}>
              <ActorSort closeModal={closeActorSort} />
            </Modal>
          )}

          <ActorDetails {...ACTOR} />
        </div>
      )}
      {showNoActors && <NoActors closeNoActors={closeNoActors} />}
      <Footer />
    </div>
  )
}

export default App
