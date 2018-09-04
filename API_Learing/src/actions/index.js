export default function getTime(time){
    console.log("ACTION:"+time);
    return{
        type:'TIME',
        payload:time
    }
}