// State argument is not application state, only the state
// this reducer is responsible for
// state = null says -> if state is undefined make state a null
export default function(state = null, action){
    switch(action.type){
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}