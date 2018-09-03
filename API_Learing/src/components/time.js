import React from 'react';
import timestampToDate from 'timestamp-to-date';

import axios from 'axios';
const url="http://worldclockapi.com/api/json/cet/now"
 class TimeShow extends React.Component{
constructor(props)
{
    super(props);
    this.state={
        hour:12,
        minutes:30,
        seconds:50,
        minis:660,
    year:2018,
    day:'09',
    month:'08',};
    this.setTime=this.setTime.bind(this);
}
setTime(){
    let date;
    
    axios.get("http://worldclockapi.com/api/json/cet/now").then(
        (response)=>{let getMil=response.data.currentFileTime;
            console.log("AXIOS:"+ response.data.currentDateTime)
            let year=response.data.currentDateTime.toString().substring(0,4);
            let month=response.data.currentDateTime.toString().substring(5,7);
            let hours=response.data.currentDateTime.toString().substring(11,13);
            console.log(hours);
           
            let minutes=response.data.currentDateTime.toString().substring(0,4);
            
            
            let seconds;
            let minis;
   
            let day; 
            let milliseconds;
           day=new Date(year, month, day, hours, minutes, seconds, milliseconds);
           date=timestampToDate(getMil,'HH:MM:ss');
           console.log(date);
           this.setState({
            hour:2,
            minutes:37,
            seconds:30,
            minis:307}
            )
        }
    );
    
   
    
}
render()
    {   
        return(
       <div id="TimeID" onClick={this.setTime}>
       Today is: <p> 
       {this.state.year}:
       {this.state.month}:
       {this.state.day}</p>
       Time is:
       {this.state.hour}:
       {this.state.minutes}:
       {this.state.seconds}:
       {this.state.minis}
       
       </div> 

        )
    }
}

export default TimeShow;