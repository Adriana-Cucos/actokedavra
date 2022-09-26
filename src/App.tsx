import { useState } from 'react'

import './App.css'

import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Actor } from './components/Actor/Actor'
import { Button } from './components/Button/Button'
import { ReadMore } from 'components/ReadMore/ReadMore'
import { Modal } from 'components/Modal/Modal'

import { BUTTON_TYPES, ICON_POSITIONS, BUTTON_BORDERS } from 'shared/constants'

import styles from './App.module.scss'

import iconArrow from './assets/arrow-chevron-down.png'
import iconPen from './assets/pen-icon.png'
import iconDelete from './assets/delete-icon.png'
import { Hobbies } from 'components/Hobbies/Hobbies'

function App() {
  const actor = {
    name: 'Leonardo Dicaprio',
    score: 10,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustache.',
  }

  const [showModal, setShowModal] = useState(false)

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

  return (
    <div className={`${styles.app} app`}>
      <div className={styles.appContent}>
        <Header />
        <Actor {...actor} className={styles.appComponent} />
        <Button
          text='Sort'
          type={BUTTON_TYPES.Full}
          iconPosition=''
          icon=''
          border={BUTTON_BORDERS.Bordered}
          className={styles.appComponent}
          onClickEvent={handleSortClick}
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
      </div>
      <Footer />
    </div>
  )
}

export default App
