import { Hobbies } from 'components/Hobbies/Hobbies'
import { ReadMore } from 'components/ReadMore/ReadMore'
import { Button } from 'components/Button/Button'

import { BUTTON_TYPES, ICON_POSITIONS, BUTTON_BORDERS } from 'shared/constants'

import styles from './ActorDetails.module.scss'

import iconPen from '../../assets/pen-icon.png'
import iconThumbsUp from '../../assets/thumbs-up.png'

export const ActorDetails = ({ image, name, ocupation, score, hobbies, description }) => {
  const handleEditButtonClick = () => {
    alert('Edit Actor')
  }

  const handleDeleteActorButtonClick = () => {
    alert('Delete Actor')
  }

  return (
    <div className={styles.actorThumbnailContainer}>
      <img className={styles.actorThumbnailContainerImage} src={image} alt={name} />
      <div className={styles.actorDetails}>
        <h3 className={styles.actorDetailsName}>{name}</h3>
        <div className={styles.actorInfo}>
          <p className={styles.actorInfoOcupation}>{ocupation}</p>
          <div className={styles.actorInfoScore}>
            <div className={styles.actorInfoScoreNumber}>{score}</div>
            <img src={iconThumbsUp} alt='Thumbs up' />
          </div>
        </div>
        <Hobbies texts={hobbies} className={styles.actorDetailsHobbies} />
        <ReadMore
          className={styles.actorDetailsReadMore}
          limit={59}
          text={description}
          labelStart='Read more'
          labelEnd='Read less'
        />
        <Button
          text='Edit'
          type={BUTTON_TYPES.EmptyIcon}
          iconPosition={ICON_POSITIONS.Right}
          icon={iconPen}
          border={BUTTON_BORDERS.Bordered}
          className={styles.actorDetailsEditBtn}
          onClickEvent={handleEditButtonClick}
        />
        <Button
          text=''
          type={BUTTON_TYPES.Round}
          iconPosition=''
          icon=''
          border=''
          className={styles.actorDetailsDeleteBtn}
          onClickEvent={handleDeleteActorButtonClick}
        />
      </div>
    </div>
  )
}
