import React from 'react';
import TimeItem from '../components/timeItem';
import {connect} from 'react-redux';

class SaveTimeList extends React.Component
{
    constructor(props) {
        super(props);
        this.state={time:0,record:[1]};
    }
    render()
    {return(
        <div className='timeList'>
        {this.props.record.map(
            (record,i=0)=>{i++; return (<TimeItem key={i} time={record}/>)}
        )}
       
        </div>
     ) }
}

function mapStateToProps(state){ // ({time})?
    return{ time: state.time, record: state.record}
}

export default connect(mapStateToProps)(SaveTimeList);