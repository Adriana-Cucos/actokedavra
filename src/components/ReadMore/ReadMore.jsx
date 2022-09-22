import { useState } from 'react'

import { Button } from 'components/Button/Button'

import { ICON_POSITIONS, BUTTON_TYPES } from 'shared/constants'

import styles from './ReadMore.module.scss'

import iconArrowDown from '../../assets/arrow-chevron-down.png'
import iconArrowUp from '../../assets/arrow-chevron-up.png'

export const ReadMore = ({ className, limit, text, labelStart, labelEnd }) => {
  const [readMoreText, setReadMoreText] = useState(`${text.slice(0, limit)}...`)
  const [buttonText, setButtonText] = useState(labelStart)
  const [buttonIcon, setButtonIcon] = useState(iconArrowDown)

  const handleDescriptionToogle = () => {
    if (readMoreText.length < text.length) {
      setReadMoreText(text)
      setButtonText(labelEnd)
      setButtonIcon(iconArrowUp)
    } else {
      setReadMoreText(`${text.slice(0, limit)}...`)
      setButtonText(labelStart)
      setButtonIcon(iconArrowDown)
    }
  }

  return (
    <div className={className}>
      <div className={styles.description}>{readMoreText}</div>
      <Button
        text={buttonText}
        type={BUTTON_TYPES.Expandable}
        iconPosition={ICON_POSITIONS.Right}
        icon={buttonIcon}
        border=''
        className={styles.button}
        onClickEvent={handleDescriptionToogle}
      />
    </div>
  )
}
