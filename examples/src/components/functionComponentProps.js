import React from 'react';

export default function FunctionalComponent(props){
    return(
        <div>{props.name}</div>
    )
};

/*ES6 syntax
export default function FunctionalComponent({name}){
    return(
        <div>{name}</div>
    )
};*/