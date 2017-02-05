import React, { Component } from 'react';
import App from '../../App'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const Home = (props) => {
  const handleSubmit = () => {
    const xhr = window.fetch('https://pairbulkdata.uspto.gov/api/queries', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        df: 'patentTitle',
        facet: true,
        fl: '*',
        fq: [],
        mm: '100%',
        qf: 'appEarlyPubNumber applId appLocation appType appStatus_txt appConfrNumber appCustNumber appGrpArtNumber appCls appSubCls appEntityStatus_txt patentNumber patentTitle primaryInventor firstNamedApplicant appExamName appExamPrefrdName appAttrDockNumber appPCTNumber appIntlPubNumber wipoEarlyPubNumber pctAppType firstInventorFile appClsSubCls rankAndInventorsList',
        searchText: 'appEarlyPubNumber:(2017-0021088)',
        sort: 'applId asc',
        start: '0'
      }),
    }).then(response => {
      return response.json()
    }).then(responseData => {
      return responseData.queryResults.searchResponse.response
    }).then(data => {
      console.log(data)
    })
  }
  return (
    <div style={{'padding': '20px 10%'}}>
      <Card>
        <CardTitle title="Search codes" />
        <CardText>
          In the textbox below, put up to 20 patent codes, one per line.  Then hit submit to get the details.
          <form onSubmit={handleSubmit}>
            <TextField
              style={{width: '100%'}}
              floatingLabelText="Patent Codes"
              multiLine
              hintText="1 code per line"
            />
            <RaisedButton
              style={{marginTop: '30px'}}
              label="Submit codes"
              type="submit"
            />
          </form>
        </CardText>
      </Card>

      <div>

      </div>
    </div>
  );
}

export default Home;
