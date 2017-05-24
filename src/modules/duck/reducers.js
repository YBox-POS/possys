import { combineReducers } from "redux";
import reduaaaa from "./types";

console.log(">>>>>||||||||||>>>>>>>>"+reduaaaa.QUACK);
/* State Shape
{
    quacking: bool,
    distance: number,
    reseting: bool
}
*/
// const defaultstate = {count:0,factor:1};

// const quackReducer = ( state = defaultstate, action ) => {
//     switch( action.type ) {
//         case types.QUACK: return {count:state.count + state.factor};
//         /* ... */
//         default: return state;
//     }
// }

// const distanceReducer = ( state = defaultstate, action ) => {
//     switch( action.type ) {
//         case types.SWIM: return {count:state.count - state.factor};
//         /* ... */
//         default: return state;
//     }
// }

// const resetReducer =(state =defaultstate, action) =>{
//     switch( action.type ){
//         case types.RESET:return {count:0};
//         default:return state;
//     }
// };
// const reducer = combineReducers( {
//     quacking: quackReducer,
//     distance: distanceReducer,
//     reseting:resetReducer
// } );

// export default reducer;


// 原始默认state
const defaultState = {
  count: 0,
  factor: 1
}

function counter(state = defaultState, action) {
  switch (action.type) {
    case reduaaaa.QUACK:
      return { ...state,count: state.count + state.factor };
    case reduaaaa.SWIM:
      return { ...state, count: state.count - state.factor };
    case reduaaaa.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default combineReducers({
    counter
});