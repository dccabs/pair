import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppShell from './components/app_shell'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppShell>this is the first page</AppShell>
      </MuiThemeProvider>
    );
  }
}

export default App;
