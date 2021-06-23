import * as t from '../types';
import axios from 'axios'

export const fetchUsersRequest = () =>{
    return {
        type:t.FETCH_USERS_REQUEST,
    }
}
export const fetchUsersSuccess = (users) =>{
    return {
        type:t.FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure = error =>{
    return {
        type:t.FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = () =>{
    return function (dispatch){
        dispatch(fetchUsersRequest())
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response =>{
            //do something with response
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            //do something with error
            dispatch(fetchUsersFailure(error.message))
        })
    }
}  

