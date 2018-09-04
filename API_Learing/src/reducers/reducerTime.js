export default function(state=0,action)
{
    switch(action.type){
        case 'TIME':return action.payload;
    }
    return state;
}