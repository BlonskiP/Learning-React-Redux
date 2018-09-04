export  function getTime(time){
   // console.log("ACTION:"+time);
    return{
        type:'TIME',
        payload:time
    }
}
export function saveTime(time){
    console.log("SAVETIME::"+time);
    return{
        type:'SAVE_TIME',
        payload:time
    }
}
export function deleteRecord(index){
    console.log('DELETED'+index)
    return{type:'DEL_TIME',
    payload:index}
}
