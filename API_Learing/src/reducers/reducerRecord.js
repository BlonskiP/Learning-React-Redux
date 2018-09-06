export default function(state=[],action)
{
    switch(action.type){
        case 'SAVE_TIME':{
          //  console.log("RECORD:"+state);
            
            return [...state,action.payload];}
        case 'DEL_TIME':{
            let tmp=[];
           for(let i=0;i<action.payload;i++)
            tmp[i]=state[i];          
           for(let i=action.payload;i<state.length-1;i++)
           tmp[i]=state[i+1];
          // console.log(tmp);
           return tmp;
        }
        
    }
    return state;
}
function remove(array, index) {
    
   
}