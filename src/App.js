import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppShell from './components/app_shell'
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <AppShell>
        {props.children}
      </AppShell>
    </MuiThemeProvider>
  );
}

export default App;
