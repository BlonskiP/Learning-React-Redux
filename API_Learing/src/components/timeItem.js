import React from 'react';
import DelBtn from '../containers/DelBtn';


class SaveListItem extends React.Component{
    render(){
        return(
            <span><p>{this.props.id} </p>
                <li> {this.props.time}</li>< DelBtn id={this.props.id}/>
                </span>
                )
    }
}export default SaveListItem;