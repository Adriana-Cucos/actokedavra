import { useEffect, useState } from 'react'

//import { ACTORS } from 'data'
import { API } from 'api/API'

import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Button } from 'components/Button/Button'
import { Actors } from 'components/Actors/Actors'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'
import { Alert } from 'components/Alert/Alert'

import { BUTTON_TYPES, BUTTON_BORDERS, ALERT_TYPES } from 'shared/constants'

import styles from './Home.module.scss'

export const Home = () => {
  const [actors, setActors] = useState([])
  const [showAddActorAlert, setShowAddActorAlert] = useState(false)

  useEffect(() => {
    ;(async () => {
      const actors = await API.getActors()
      setActors(actors)
    })()
  }, [])

  const handleAddActorBtnClick = (actor, isSuccess) => {
    setActors([...actors, actor])
    isSuccess && setShowAddActorAlert(isSuccess)
  }

  const closeAddActorAlert = () => {
    setShowAddActorAlert(false)
  }

  return (
    <div className={`${styles.homepage} app`}>
      <Header />
      {showAddActorAlert && (
        <Alert
          type={ALERT_TYPES.Success}
          text='Actor added successfully'
          closeAlert={closeAddActorAlert}
          autoclose={true}
        />
      )}
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
        <ActorAdd handleAddActorBtnClick={handleAddActorBtnClick} />
      </div>
      <Footer />
    </div>
  )
}
