import React, { Component } from 'react';
import TimeShow from '../containers/time.js';

import SaveBtn from '../containers/SaveBtn';
import SaveTimeList from '../containers/saveTimeList';
export default class App extends Component {
  render() {
    return (

      <div>
        <TimeShow  />
        <div className="BtnContainer">
        <SaveBtn />
      
        </div>
        <SaveTimeList/>
      </div>
    );
  }
  
}
