import * as t from '../types';
// import axios from 'axios'

// export const fetchPosts = () => async dispatch =>{
    
//     dispatch ({
//         type:t.GET_POSTS,
//         payload:['1st post', '2nd post' , '3rd post'],

//     })
// }

export const buyCake = (number = 1) =>{
    return {
        type:t.BUY_CAKE,
        payload:number
    }
}