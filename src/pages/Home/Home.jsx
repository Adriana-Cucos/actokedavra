import { useEffect, useState } from 'react'

//import { ACTORS } from 'data'
import { API } from 'api/API'

import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Button } from 'components/Button/Button'
import { Actors } from 'components/Actors/Actors'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'

import { BUTTON_TYPES, BUTTON_BORDERS } from 'shared/constants'

import styles from './Home.module.scss'

export const Home = () => {
  const [actors, setActors] = useState([])

  useEffect(() => {
    ;(async () => {
      const actors = await API.getActors()
      setActors(actors)
    })()
  }, [])

  return (
    <div className={`${styles.homepage} app`}>
      <Header />
      <div className={styles.homepageContent}>
        <div className={styles.actorActions}>
          <Button
            text='Sort'
            type={BUTTON_TYPES.Full}
            iconPosition=''
            icon=''
            border={BUTTON_BORDERS.Bordered}
            className={styles.actorActionsBtn}
            onClickEvent={null}
          />
          <Button
            text='Select'
            type={BUTTON_TYPES.Full}
            iconPosition=''
            icon=''
            border={BUTTON_BORDERS.Bordered}
            className={styles.actorActionsBtn}
            onClickEvent={null}
          />
        </div>
        <Actors actors={actors} />
        <ActorAdd />
      </div>
      <Footer />
    </div>
  )
}
