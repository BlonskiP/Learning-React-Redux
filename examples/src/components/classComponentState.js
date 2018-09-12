import React from 'react';

class ClassComponentState extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {exampleState:'Default value'};
    }
    render()
    {   

        return <div > 
     hi this is my state {this.state.exampleState}
        </div>
    };

   

};


export default ClassComponentState;