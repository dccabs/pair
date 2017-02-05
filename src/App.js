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
        <div style={{'padding': '20px 10%'}}>
          <Card>
            <CardTitle title="Search codes" />
            <CardText>
              In the textbox below, put up to 20 patent codes, one per line.  Then hit submit to get the details.
              <form>
                <TextField
                  style={{width: '100%'}}
                  floatingLabelText="Patent Codes"
                  multiLine
                  hintText="Paste your patent codes here, 1 code per line"
                  />
                  <RaisedButton
                    style={{marginTop: '30px'}}
                    label="Submit codes"
                  />
                </form>
            </CardText>
            <CardActions>
            </CardActions>
          </Card>
        </div>
      </AppShell>
    </MuiThemeProvider>
  );
}

export default App;
