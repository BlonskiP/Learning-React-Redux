import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { bindActionCreators } from 'redux';
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
        this.setTime();
        this.setDate();
    }
    setTime(){
    
        axios.get("http://worldclockapi.com/api/json/cet/now").then(
            (response)=>{
                //console.log("AXIOS:"+ response.data.currentDateTime)
          
                let fhours=response.data.currentDateTime.toString().substring(11,13);
                let fminutes=response.data.currentDateTime.toString().substring(14,16);
                let fseconds;
                let milliseconds=response.data.currentFileTime.toString();
                fseconds=parseInt(((milliseconds.substring(9,11)))%60);
                let ftime=fhours.toString()+':'+fminutes.toString()+':'+fseconds.toString();
                this.setState({ time:ftime});
            }
        );
        
        _.delay(this.setTime,1000);
        
    }
     setDate(){
        axios.get("http://worldclockapi.com/api/json/cet/now").then(
            (response)=>{
                //console.log("AXIOS:"+ response.data.currentDateTime)
                let fyear=response.data.currentDateTime.toString().substring(0,4);
                let fmonth=response.data.currentDateTime.toString().substring(5,7);
                let fday=response.data.currentDateTime.toString().substring(8,10);
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
        Today is: <p> 
        {this.state.days}
        </p>
        Time is:
        {this.state.time}
        
        </div> 

            )
        }
}

function mapDispatchToPros(dispatch){
    return bindActionCreators({},dispatch);
}

export default TimeShow;