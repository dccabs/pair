import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { blueGrey500 } from 'material-ui/styles/colors'

const Menu = (props) => {
  const { menuOpen, toggleMenu } = props
  return (
    <div>
      <Drawer open={menuOpen} docked>
        <AppBar showMenuIconButton={false} style={{background: blueGrey500}} title="Menu" />
        <MenuItem onTouchTap={toggleMenu}>Menu Item</MenuItem>
        <MenuItem onTouchTap={toggleMenu}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  )
}

export default Menu