import { useState } from 'react'
import cx from 'classnames'

import { Button } from 'components/Button/Button'

import { BUTTON_TYPES } from 'shared/constants'

import styles from './ActorForm.module.scss'

export const ActorForm = () => {
  const descriptionCharsNum = 180
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [hobbies, setHobbies] = useState('')
  const [description, setDescription] = useState('')
  const [countDescription, setCountDescription] = useState(descriptionCharsNum)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleActorDescriptionOnChange = (e) => {
    setDescription(e.target.value)
    setCountDescription(descriptionCharsNum - e.target.value.length)
  }

  const handleActorFormSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <form onSubmit={handleActorFormSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Name</label>
        <input
          className={cx(styles.formGroupInput, `${formSubmitted && !name ? styles.formInvalidField : ''}`)}
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formSubmitted && !name && <span className={styles.formGroupMessage}>Field required</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Principal job</label>
        <input
          className={cx(styles.formGroupInput, `${formSubmitted && !occupation ? styles.formInvalidField : ''}`)}
          type='text'
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        {formSubmitted && !occupation && <span className={styles.formGroupMessage}>Field required</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Hobbies</label>
        <input
          className={cx(styles.formGroupInput, `${formSubmitted && !hobbies ? styles.formInvalidField : ''}`)}
          type='text'
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
        {formSubmitted && !hobbies && <span className={styles.formGroupMessage}>Field required</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Short description</label>
        <div
          className={cx(styles.formGroupContainer, `${formSubmitted && !description ? styles.formInvalidField : ''}`)}>
          <textarea
            className={styles.formGroupContainerTextarea}
            description={description}
            maxLength={descriptionCharsNum}
            onChange={handleActorDescriptionOnChange}
          />
          <div className={styles.formGroupContainerMessage}>{countDescription} characters remained</div>
        </div>
        {formSubmitted && !description && <span className={styles.formGroupMessage}>Field required</span>}
      </div>
      <div className={styles.formGroup}>
        <Button
          text='Add new actor'
          type={BUTTON_TYPES.Main}
          iconPosition=''
          icon=''
          border=''
          className={styles.formGroupSubmitBtn}
          onClickEvent={null}
        />
      </div>
    </form>
  )
}
