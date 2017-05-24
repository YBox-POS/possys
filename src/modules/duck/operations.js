// import actions from "./actions";
import {createStore, applyMiddleware, compose} from 'redux';
// import createSagaMiddleware,{END} from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers';



const configurestore = preloadedState =>{
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(createLogger())
        )
    );
}

const store = configurestore();
export default store;


// This is a link to an action defined in actions.js.
// const simpleQuack = actions.quack;

// This is a thunk which dispatches multiple actions from actions.js
// const complexQuack = ( distance ) => ( dispatch ) => {
//     dispatch( actions.quack( ) ).then( ( ) => {
//         dispatch( actions.swim( distance ) );
//         dispatch( /* any action */ );
//     } );
// }


// export default {
//     simpleQuack,
//     complexQuack
// };