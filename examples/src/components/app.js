import React, { Component } from 'react';
//import Components
import FunctionalComponent1 from './functionComponent';
import FunctionalComponent2 from './functionComponent2';
import FunctionalComponentProps from './functionComponentProps';
import ClassComponent from './classComponent';
import ClassComponentProps from './classComponentProps';
import ClassComponentState from './classComponentState';
import ClassComponentStateOnClick from './classComponentStateOnClick';
export default class App extends Component {
  render() {
    return (
      <div>
       <FunctionalComponent1/>
       <FunctionalComponent2/>
       <FunctionalComponentProps name="NAME is Props"/>
       <ClassComponent/>
       <ClassComponentProps name="I'm ClassComponent with Props.name"/>
       <ClassComponentState/>
      <ClassComponentStateOnClick/>
      </div>
    );
  }
}
