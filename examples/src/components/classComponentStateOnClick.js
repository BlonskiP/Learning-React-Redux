import React from 'react';

class ClassComponentState extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {exampleState:'Default value'};
        this.handleClick=this.handleClick.bind(this); // Need that to work onClick with function
        
    }
    handleClick(){
        this.setState({exampleState: 'Value after click'});
    }
    render()
    {   

        return <div onClick={this.handleClick}> 
     CLICK ME TO CHANGE STATE {this.state.exampleState}
        </div>
    };

   

};


export default ClassComponentState;