import React, { Component, PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { blueGrey500 } from 'material-ui/styles/colors'



export default class Menu extends Component  {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem onTouchTap={this.handleToggle}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}