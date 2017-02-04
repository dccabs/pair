import React, { Component, PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { blueGrey500 } from 'material-ui/styles/colors'

const Menu = (props) => {
  const { menuOpen, toggleMenu } = props
  return (
    <div>
      <RaisedButton
        label="Toggle Drawer"
        onTouchTap={props.toggleMenu}
      />
      <Drawer open={menuOpen}>
        <MenuItem onTouchTap={toggleMenu}>Menu Item</MenuItem>
        <MenuItem onTouchTap={toggleMenu}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  )
}

export default Menu