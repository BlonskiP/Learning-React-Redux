import React from 'react';
import { connect } from 'react-redux';
import {saveTime} from '../actions';
import { bindActionCreators } from 'redux';
class SaveBtn extends React.Component
{
    
    render()
    {
        return(<div onClick={this.handleClick} className="btn">Save Time!</div>)
    }
    handleClick=()=>{
    console.log(this.props.TimeToSave);
        this.props.saveTime(this.props.TimeToSave);
    }
    
}

function mapStateToProps(state){
    return{ TimeToSave: state.time};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({saveTime},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SaveBtn);