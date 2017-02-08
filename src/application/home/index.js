import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {inputNumbers: '', results: [], loading: false, loadingCount: 0};
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getResponse = this.getResponse.bind(this)
  }

  handleUpdate (e) {
    const val = e.target.value
    this.setState({ inputNumbers: val})
  }

  handleSubmit () {
    this.setState({results: []});
    const { inputNumbers } = this.state;
    this.parseNumbers(inputNumbers)
  }

  parseNumbers (inputNumbers) {
    inputNumbers = inputNumbers.replace(/[\n\r]/g, ',');
    inputNumbers = inputNumbers.replace(/US/g, '');
    inputNumbers = inputNumbers.split(',');

    const formattedNumbers = inputNumbers.map((num, i) => {
      const l = num.length;
      let numberType = null
      if (l===11) {
        numberType = 'publicationNumber';
      }
      else if (l===7) {
        numberType = 'patentNumber';
      }
      else if (num.indexOf("/") !== -1) {
        numberType = 'applicationNumber';
      }
      let result = {}
      if (numberType==='publicationNumber') {
        result = {
          number: num.replace(/(\d{4})/, "$1-"),
          format: numberType
        }
      }
      if (numberType==='patentNumber') {
        result = {
          number: num,
          format: numberType
        }
      }

      if (numberType==='applicationNumber') {
        result = {
          number: num.replace("/", ""),
          format: 'applicationNumber'
        }
      }
      return result;
    })
    this.setState({ loading: true, loadingCount:formattedNumbers.length })
    formattedNumbers.forEach((result, i) => {
      this.getResponse(result, i)
    })
  }

  getResponse (result, index) {
    let searchText = ""
    if (result.format==='publicationNumber') {
      searchText = `appEarlyPubNumber:(${result.number})`
    }
    if (result.format==='patentNumber') {
      searchText = `patentNumber:(${result.number})`
    }
    if (result.format==='applicationNumber') {
      searchText = `applId:(${result.number})`
    }
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
        searchText,
        sort: 'applId asc',
        start: '0'
      }),
    }).then(response => {
      return response.json()
    }).then(responseData => {
      return responseData.queryResults.searchResponse.response
    }).then(data => {
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
    const { inputNumbers, loadingCount, results } = this.state;
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
                value={inputNumbers}
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
