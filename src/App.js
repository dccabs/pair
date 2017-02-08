import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppShell from './components/app_shell'

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
