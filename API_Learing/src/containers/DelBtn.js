import React from 'react';
import {connect} from 'react-redux';
import {deleteRecord} from '../actions';
import { bindActionCreators } from 'redux';
class DelBtn extends React.Component
{   static number=0;
    constructor(props)
    {   
        super(props);
        
        this.handleClick=this.handleClick.bind(this);
    }
    render()
    {
        return(<div onClick={this.handleClick} className="btn btn_delete">Delete Time!</div>)
    }
    handleClick()
    {
        this.props.deleteRecord(this.props.id);
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteRecord},dispatch);
}
export default connect(null,mapDispatchToProps)(DelBtn)