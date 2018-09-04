import React from 'react';
import TimeItem from '../components/timeItem';
class SaveTimeList extends React.Component
{
    constructor(props) {
        super(props);
        this.state={time:0};
    }
    render()
    {return(
        <div className='timeList'>
        <TimeItem time='21:37:50'/>
        <TimeItem time='21:37:50'/>
        <TimeItem time='21:37:50'/>
        <TimeItem time='21:37:50'/>
        </div>
     ) }
}


export default SaveTimeList;