import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import {getTime} from '../actions/';
import { bindActionCreators } from 'redux';
import{connect} from 'react-redux';
const url="http://worldclockapi.com/api/json/cet/now"
 class TimeShow extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            hour:0,
            minutes:0,
            seconds:0,
        year:0,
        day:0,
        month:0,
        time:'',
        days:''};
        this.setTime=this.setTime.bind(this);
        this.sendTime=this.sendTime.bind(this);
        this.setTime();
        this.setDate();
    }
    setTime(){
    
        axios.get("http://worldclockapi.com/api/json/cet/now").then(
            (response)=>{
                //console.log("AXIOS:"+ response.data.currentDateTime)
                let data=response.data.currentDateTime.toString();
                let fhours=data.substring(11,13);
                let fminutes=data.substring(14,16);
               
                let milliseconds=response.data.currentFileTime.toString();
                let  fseconds=parseInt(((milliseconds.substring(9,11)))%60);
                let ftime=fhours.toString()+':'+fminutes.toString()+':'+fseconds.toString();
                this.setState({ time:ftime});
            }
        );
        _.delay(this.setTime,1000);  
        this.sendTime();
    }
    sendTime(){
        this.props.getTime(this.state.time);
    }
     setDate(){
        axios.get("http://worldclockapi.com/api/json/cet/now").then(
            (response)=>{
                //console.log("AXIOS:"+ response.data.currentDateTime)
                let data=response.data.currentDateTime.toString();
                let fyear=data.substring(0,4);
                let fmonth=data.substring(5,7);
                let fday=data.substring(8,10);
                let fdays=fyear.toString()+'.'+fmonth.toString()+'.'+fday.toString();
                this.setState({
                    days:fdays
                })}
                );
}
    render()
        {   
        return(
            <div id="TimeID">
            Today is: <p> {this.state.days}</p>
            Time is:<p> {this.state.time}</p>
            </div> )
        }
}

function mapDispatchToPros(dispatch){
    return bindActionCreators({getTime},dispatch);
}

export default connect(null,mapDispatchToPros)(TimeShow);