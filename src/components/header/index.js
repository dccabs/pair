import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';

import { blueGrey500 } from 'material-ui/styles/colors'

const Header = props => {
  const { toggleMenu } = props
  return (
    <header>
      <AppBar
        style={{background: blueGrey500}}
        title="Techson Pair Application"
        onLeftIconButtonTouchTap={toggleMenu}
      />
    </header>
  )
}

export default Header

Header.propTypes = {
  toggleMenu: PropTypes.any
}