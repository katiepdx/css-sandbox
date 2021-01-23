import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({ link }) => {
  return (
    <a href={link.address} target='_blank' rel='noreferrer'>
      {/* <img src={`../../public/assets/${link.icon}`} alt={link.description} /> */}
      {link.name}
    </a>
  )
}

MenuItem.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
}

export default MenuItem
