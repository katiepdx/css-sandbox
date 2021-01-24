import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({
  modalOpenStyles,
  handleModalOpenStyles,
  modalExitStyles,
  handleModalExitStyles }) => {
  return (
    <>
      <button onClick={handleModalOpenStyles} className={modalOpenStyles}>Click to open modal</button>

      <section className={modalExitStyles}>
        <p className='modal-content-wrapper'>
          <div className='modal-box'>
            <div><span className='modal-exit' onClick={handleModalExitStyles}>X</span></div>
            <p>Modal content</p>
          </div>
        </p>
      </section>
    </>
  )
}

Modal.propTypes = {
  modalOpenStyles: PropTypes.string.isRequired,
  handleModalOpenStyles: PropTypes.func.isRequired,
  modalExitStyles: PropTypes.string.isRequired,
  handleModalExitStyles: PropTypes.func.isRequired
}

export default Modal
