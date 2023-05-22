import { useState } from 'react'
import cx from 'classnames'

import { Button } from 'components/Button/Button'

import { BUTTON_TYPES, NO_PROFILE_IMAGE } from 'shared/constants'

import styles from './ActorForm.module.scss'

export const ActorForm = ({ handleAddActorBtnClick, handleCloseModal }) => {
  const descriptionCharsNum = 180
  const initialValues = {
    name: '',
    image: '',
    occupation: '',
    likes: '',
    hobbies: '',
    description: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [countDescription, setCountDescription] = useState(descriptionCharsNum)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleActorDescriptionOnChange = (e) => {
    handleChange(e)
    setCountDescription(descriptionCharsNum - e.target.value.length)
  }

  const validate = (values) => {
    const errors = {}
    let formIsValid = true

    if (!values.name) {
      errors.name = 'Field required'
      formIsValid = false
    }

    if (!values.occupation) {
      errors.occupation = 'Field required'
      formIsValid = false
    }

    if (!values.hobbies) {
      errors.hobbies = 'Field required'
      formIsValid = false
    }

    if (!values.description) {
      errors.description = 'Field required'
      formIsValid = false
    }

    if (isNaN(values.likes)) {
      errors.likes = 'Field should contain a number'
      formIsValid = false
    }

    setFormErrors(errors)
    return formIsValid
  }

  const handleActorFormSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let isNewActorAdded = false

    if (validate(formValues)) {
      const hobbiesArr = formValues.hobbies.split(',')
      const imageUrl = !formValues.image ? NO_PROFILE_IMAGE.Link : formValues.image
      const likesNum = !formValues.likes ? 0 : formValues.likes
      isNewActorAdded = true
      handleAddActorBtnClick({ ...formValues, hobbies: hobbiesArr, image: imageUrl, likes: likesNum }, isNewActorAdded)
      handleCloseModal()
    }
  }

  return (
    <form onSubmit={handleActorFormSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Name*</label>
        <input
          className={cx(styles.formGroupInput, `${formErrors.name ? styles.formInvalidField : ''}`)}
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleChange}
        />
        <span className={styles.formGroupMessage}>{formErrors.name}</span>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Profile Image</label>
        <input
          className={styles.formGroupInput}
          type='text'
          name='image'
          value={formValues.image}
          onChange={handleChange}
        />
        <span className={styles.formGroupMessage}>{formErrors.name}</span>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Principal job*</label>
        <input
          className={cx(styles.formGroupInput, `${formErrors.occupation ? styles.formInvalidField : ''}`)}
          type='text'
          name='occupation'
          value={formValues.occupation}
          onChange={handleChange}
        />
        <span className={styles.formGroupMessage}>{formErrors.occupation}</span>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Likes</label>
        <input
          className={cx(styles.formGroupInput, `${formErrors.likes ? styles.formInvalidField : ''}`)}
          type='text'
          name='likes'
          value={formValues.likes}
          onChange={handleChange}
        />
        <span className={styles.formGroupMessage}>{formErrors.likes}</span>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Hobbies*</label>
        <input
          className={cx(styles.formGroupInput, `${formErrors.hobbies ? styles.formInvalidField : ''}`)}
          type='text'
          name='hobbies'
          value={formValues.hobbies}
          onChange={handleChange}
        />
        <span className={styles.formGroupMessage}>{formErrors.hobbies}</span>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel}>Short description*</label>
        <div className={cx(styles.formGroupContainer, `${formErrors.description ? styles.formInvalidField : ''}`)}>
          <textarea
            className={styles.formGroupContainerTextarea}
            name='description'
            description={formValues.description}
            maxLength={descriptionCharsNum}
            onChange={handleActorDescriptionOnChange}
          />
          <div className={styles.formGroupContainerMessage}>{countDescription} characters remained</div>
        </div>
        <span className={styles.formGroupMessage}>{formErrors.description}</span>
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
