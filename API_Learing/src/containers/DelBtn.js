import React from 'react';
import {connect} from 'react-redux';
import {deleteRecord} from '../actions'
class DelBtn extends React.Component
{   static number=0;
    constructor(props)
    {   
        super(props);
        
        this.handleClick=this.handleClick.bind(this);
        this.state={id: this.props.id}
    }
    render()
    {
        return(<div onClick={this.handleClick} className="btn btn_delete">{this.props.id}Delete Time!</div>)
    }
    handleClick()
    {
        console.log(this.state.id);
      //  this.props.deleteRecord(this.props.id);
    }
}
export default DelBtn;