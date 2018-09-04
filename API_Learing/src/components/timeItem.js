import React from 'react';
import DelBtn from './DelBtn';

const SaveListItem=({time})=>
{
    return(
<span>
    <li>{time}</li><DelBtn />
    </span>
    )
}
export default SaveListItem;