export default function(state=[],action)
{
    switch(action.type){
        case 'SAVE_TIME':{
            console.log("RECORD:"+state);
            
            return [...state,action.payload];}
        case 'DEL_TIME':{}//To DO
        
    }
    return state;
}