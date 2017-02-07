import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {pubNumbers: '', results: [], loading: false, loadingCount: 0};
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getResponse = this.getResponse.bind(this)
  }

  handleUpdate (e) {
    const val = e.target.value
    this.setState({ pubNumbers: val})
  }

  handleSubmit () {
    const { pubNumbers } = this.state;
    this.parseNumbers(pubNumbers)
  }

  parseNumbers (pubNumbers) {
    console.log('pubNumbers', pubNumbers)
    pubNumbers = pubNumbers.replace(/[\n\r]/g, ',');
    pubNumbers = pubNumbers.replace(/US/g, '');
    console.log('pubNumbers with commas', pubNumbers)
    pubNumbers = pubNumbers.split(',');

    const formattedNumbers = pubNumbers.map((num, i) => {
      console.log(i)
      console.log(String(num))
      const result = num.replace(/(\d{4})/, "$1-");
      return result;
    })
    console.log(formattedNumbers)
    this.setState({ loading: true, loadingCount:formattedNumbers.length })
    formattedNumbers.forEach((number, i) => {
      this.getResponse(number, i)
    })
  }

  getResponse (number, index) {
    window.fetch('https://pairbulkdata.uspto.gov/api/queries', {
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
        searchText: `appEarlyPubNumber:(${number})`,
        sort: 'applId asc',
        start: '0'
      }),
    }).then(response => {
      return response.json()
    }).then(responseData => {
      return responseData.queryResults.searchResponse.response
    }).then(data => {
      console.log(index, data)
      const loadingCount = this.state.loadingCount - 1
      const results = this.state.results
      results.push(data.docs[0])
      this.setState({
        loadingCount,
        results
      })
    })
  }
  render () {
    const { pubNumbers, loadingCount, results } = this.state;
    return (
      <div style={{'padding': '20px 10%'}}>
        <Card>
          <CardTitle title="Search codes" />
          <CardText>
            In the textbox below, put up to 20 patent codes, one per line.  Then hit submit to get the details.
            <form onSubmit={this.handleSubmit}>
              <TextField
                style={{width: '100%'}}
                floatingLabelText="Patent Codes"
                multiLine
                value={pubNumbers}
                onChange={this.handleUpdate}
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
          <div style={{marginTop: '30px'}}>
          { (loadingCount)
            ? <LinearProgress mode="indeterminate" />
            : <div>
              { results.map((result, index) => {
                  const { patentTitle, appStatus } = result;
                  return(
                    <Card key={index} style={{margin: '20px 0 20px'}}>
                      <CardTitle title={patentTitle} />
                      <CardText>
                        <div>Application Status: {appStatus}</div>
                      </CardText>
                    </Card>
                  )
                })
              }
            </div>
          }
          </div>
        <div>

        </div>
      </div>
    );
  }
}
