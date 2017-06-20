import { combineReducers,createStore, applyMiddleware ,compose} from "redux";
import counter from "./widgets";
import createLogger from 'redux-logger';


const reducera = combineReducers({
    counter
});


const configurestore = preloadedState =>{
    return createStore(
        reducera,
        preloadedState,
        compose(
            applyMiddleware(createLogger())
        )
    );
}

const store = configurestore();
export default store;