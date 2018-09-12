import React from 'react';

export default class ClassComponentProps extends React.Component{

    render()
    {
        return(
            <div>{this.props.name}</div>
        )
    }
}