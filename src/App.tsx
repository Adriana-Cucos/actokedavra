import './App.css'

import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Actor } from './components/Actor/Actor'
import { Button } from './components/Button/Button'
import { ReadMore } from 'components/ReadMore/ReadMore'

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

  return (
    <div className={styles.app}>
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
        />
        <Button text='' type={BUTTON_TYPES.Round} iconPosition='' icon='' border='' className={styles.appComponent} />
        <Button
          text='Read more'
          type={BUTTON_TYPES.Expandable}
          iconPosition={ICON_POSITIONS.Right}
          icon={iconArrow}
          border=''
          className={styles.appComponent}
        />
        <Button
          text='Edit'
          type={BUTTON_TYPES.EmptyIcon}
          iconPosition={ICON_POSITIONS.Right}
          icon={iconPen}
          border={BUTTON_BORDERS.Bordered}
          className={styles.appComponent}
        />
        <Button
          text='Add new actor'
          type={BUTTON_TYPES.Main}
          iconPosition=''
          icon=''
          border=''
          className={styles.appComponent}
        />
        <Button
          text='Delete'
          type={BUTTON_TYPES.IconEmpty}
          iconPosition={ICON_POSITIONS.Left}
          icon={iconDelete}
          border={BUTTON_BORDERS.BoldBoldered}
          className={styles.appComponent}
        />
        <ReadMore className={styles.appComponent} limit={59}>
          It's easy to believe Leonardo DiCaprio really is the "king" of the movie industry. He is also good looking.
        </ReadMore>
        <Hobbies texts={['Traveling', 'Reading', 'Dancing', 'Blogging']} className={styles.appComponent} />
      </div>
      <Footer />
    </div>
  )
}

export default App
