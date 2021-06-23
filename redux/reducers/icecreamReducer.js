import * as t from '../types';

const initialState ={
    numOfIceCream:20 
}

export const icecreamReducer = (state = initialState , action )=>{
    switch(action.type){

        case t.BUY_ICECREAM :
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1 
            }

        default:
            return state
    }
}