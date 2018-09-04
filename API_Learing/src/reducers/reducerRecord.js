export default function(state=[],action)
{
    switch(action.type){
        case 'SAVE_TIME':{
            console.log("RECORD:"+state);
            
            return [...state,action.payload];}
        case 'DEL_TIME':{
            let temp1=state.slice(0,action.payload);
            let temp2=state.slice(action.payload,state.length);
            console.log(temp1);
            console.log("DEL" + action.payload);
            let newstate=[];
          
            return newstate.contact(temp1,temp2);
        }//To DO
        
    }
    return state;
}