import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';

import { blueGrey500 } from 'material-ui/styles/colors'

const Header = () => {
  return (
    <header>
      <AppBar
        style={{background: blueGrey500}}
        title="Techson Pair Application"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </header>
  )
}

export default Header