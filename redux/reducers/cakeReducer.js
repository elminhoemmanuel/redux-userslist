import * as t from '../types';

const initialState ={
    numOfCakes:10 
}

export const cakeReducer = (state = initialState , action )=>{
    switch(action.type){

        case t.BUY_CAKE :
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload 
            }

        default:
            return state
    }
}

// const initialState ={
//     posts : [],
//     post : {},
//     loading : false,
//     error : null
// }

// export const postReducer = (state = initialState , action )=>{
//     switch(action.type){

//         case t.GET_POSTS :
//             return {
//                 ...state,
//                 posts:action.payload,
//                 loading: false,
//                 error:null
//             }

//         default:
//             return state
//     }
// }