import { SET_USER } from '../actions/actions';
import { RESET } from '../actions/actions';


export const initialState = {
    user : {

       email: '' ,
       name : localStorage.getItem('name'),
       about : '',
       name: '', 
     
    }
}

const reducer = (state = initialState, action ) => {
    let data ={}, newState = {}
    switch(action.type){
        case SET_USER:
            data = {

                email: action.payload.email,
                name : action.payload.name,
               
            }
           // Object.assign(newState, data);
            Object.assign(newState,initialState,data);
            return newState;
        case RESET:
             return state; 
        default: return state;
    }
}

export default reducer;