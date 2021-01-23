import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const MenuList = ({ allLinks }) => (
  allLinks.map((link, index) => {
    return <div key={index} className='menu-item'>
      <MenuItem link={link} />
    </div>
  })
)

MenuList.propTypes = {
  allLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
}

export default MenuList
