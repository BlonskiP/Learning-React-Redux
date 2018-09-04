import React from 'react';
import TimeItem from '../components/timeItem';
class SaveTimeList extends React.Component
{
    render()
    {return(
        <div>
        <TimeItem time="5"/>
        <TimeItem/>
        <TimeItem/>
        <TimeItem/>
        <TimeItem/>
        </div>
     ) }
}
export default SaveTimeList;