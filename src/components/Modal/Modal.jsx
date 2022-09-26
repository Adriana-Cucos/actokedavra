import ReactDom from 'react-dom'

import { useState, useEffect } from 'react'

import styles from './Modal.module.scss'

import { ReactComponent as IconClose } from '../../assets/close.svg'

export const Modal = ({ title, closeModal, hasCloseBtn, children }) => {
  const [cssBottom, setCssBottom] = useState('-100%')

  const handleCloseModal = () => {
    setCssBottom('-100%')
    window.setTimeout(() => {
      closeModal()
    }, 400)
  }

  useEffect(() => {
    setCssBottom('0')
  }, [])

  return ReactDom.createPortal(
    <>
      <div className={styles.modalOverlay} onClick={handleCloseModal}></div>

      <div className={styles.modal} style={{ bottom: `${cssBottom}` }}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalContent}>{children}</div>
        {hasCloseBtn && (
          <div className={styles.modalClose} onClick={handleCloseModal}>
            <IconClose />
          </div>
        )}
      </div>
    </>,
    document.querySelector('.app'),
  )
}
