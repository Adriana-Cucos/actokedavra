import { nanoid } from 'nanoid'

import { ActorDetails } from 'components/ActorDetails/ActorDetails'

import styles from './Actors.module.scss'

export const Actors = ({ actors }) => {
  return (
    <div className={styles.actorsList}>
      {actors.map((actor) => (
        <div className={styles.actorsListItem} key={nanoid()}>
          <ActorDetails {...actor} />
        </div>
      ))}
    </div>
  )
}
