export default function(state=0,action)
{//console.log("reducer:"+action.payload);
    switch(action.type){
        
        case 'TIME':return action.payload;
        
    }
    return state;
}