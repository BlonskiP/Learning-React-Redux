import React, { Component } from 'react';
import TimeShow from './time.js';
import DelBtn from './DelBtn';
import SaveBtn from './SaveBtn';
import SaveTimeList from '../containers/saveTimeList';
export default class App extends Component {
  render() {
    return (

      <div>
        <TimeShow />
        <div className="BtnContainer">
        <SaveBtn />
        <DelBtn />
        </div>
        <SaveTimeList/>
      </div>
    );
  }
}
