import React from 'react';
import timestampToDate from 'timestamp-to-date';
import _ from 'lodash';
import axios from 'axios';
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
        month:0};
        this.setTime=this.setTime.bind(this);
        this.setTime();
        this.setDate();
    }
    setTime(){
    
        axios.get("http://worldclockapi.com/api/json/cet/now").then(
            (response)=>{
                console.log("AXIOS:"+ response.data.currentDateTime)
          
                let fhours=response.data.currentDateTime.toString().substring(11,13);
                let fminutes=response.data.currentDateTime.toString().substring(14,16);
                let fseconds;
                let milliseconds=response.data.currentFileTime.toString();
            
           
           fseconds=parseInt(((milliseconds.substring(9,11)))%60);
          

            this.setState({
                hour:fhours,
                minutes:fminutes,
                seconds:fseconds,
            });
            }
        );
        
    _.delay(this.setTime,1000);
        
    }
    
    setDate(){
        axios.get("http://worldclockapi.com/api/json/cet/now").then(
            (response)=>{
                console.log("AXIOS:"+ response.data.currentDateTime)
                let fyear=response.data.currentDateTime.toString().substring(0,4);
                let fmonth=response.data.currentDateTime.toString().substring(5,7);
                let fday=response.data.currentDateTime.toString().substring(8,10);
                this.setState({
                    year:fyear,
                    day:fday,
                    month:fmonth
                })}
                );
}
    render()
        {   
            return(
        <div id="TimeID">
        Today is: <p> 
        {this.state.year}:
        {this.state.month}:
        {this.state.day}</p>
        Time is:
        {this.state.hour}:
        {this.state.minutes}:
        {this.state.seconds}
        
        </div> 

            )
        }
}

export default TimeShow;