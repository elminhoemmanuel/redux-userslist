import * as t from '../types';

const initialState = {
    loading:false,
    users:[],
    error:''
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case t.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case t.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case t.FETCH_USERS_FAILURE:
            return {
                ...state, 
                loading:false,
                users:[],
                error:action.payload
            }
        
        default:
            return state
    }

}