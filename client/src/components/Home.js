import React, { Component } from 'react';
import FindAd from './FindAd';
import Ads from './Ads';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      sellItems: [{id: 1, itemName: "Lanchas", filter: {type: '', manufacturer: '', minValue: '', maxValue: '', minFoot: '', maxFoot: '', location: ''}},
                  {id: 2, itemName: "Veleiros", filter: {type: '', manufacturer: '', minValue: '', maxValue: '', minFoot: '', maxFoot: '', location: ''}},
                  {id: 3, itemName: "Jet Skis", filter: {type: '', manufacturer: '', minValue: '', maxValue: '', minFoot: '', maxFoot: '', location: ''}}]
    }
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <FindAd items={this.state.sellItems} />
        <Ads />
      </div>
    );
  }
}

export default Home;
