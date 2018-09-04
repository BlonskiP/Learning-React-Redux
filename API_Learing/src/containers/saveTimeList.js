import React from 'react';
import TimeItem from '../components/timeItem';
class SaveTimeList extends React.Component
{
    render()
    {return(
        <div className='timeList'>
        <TimeItem/>
        <TimeItem/>
        <TimeItem/>
        <TimeItem/>
        </div>
     ) }
}
export default SaveTimeList;