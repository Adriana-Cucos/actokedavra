import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Button } from 'components/Button/Button'
import { ActorDetails } from 'components/ActorDetails/ActorDetails'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'

import { BUTTON_TYPES, BUTTON_BORDERS } from 'shared/constants'
import { ACTOR } from 'data'

import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={`${styles.app} app`}>
      <Header />
      <div className={`${styles.appContent} appComponent`}>
        <Button
          text='Sort'
          type={BUTTON_TYPES.Full}
          iconPosition=''
          icon=''
          border={BUTTON_BORDERS.Bordered}
          className={styles.appComponent}
          onClickEvent={null}
        />
        <Button
          text='Select'
          type={BUTTON_TYPES.Full}
          iconPosition=''
          icon=''
          border={BUTTON_BORDERS.Bordered}
          className={styles.appComponent}
          onClickEvent={null}
        />
        <ActorDetails {...ACTOR} />
        <ActorAdd />
      </div>
      <Footer />
    </div>
  )
}
