//Action types
const QUACK = "QUACK";
const SWIM = "SWIM";
const RESET = "RESET";

//Actions
export function quack(){
    return{
        type:QUACK
    }
}

export function swim(){
    return{
        type:SWIM
    }
}

export function reset(){
    return{
        type:RESET
    }
}

//reducers
const defaultState = {
  count: 0,
  factor: 1
}
export default function counter(state = defaultState, action){
  switch (action.type) {
    case QUACK:
      return { ...state,count: state.count + state.factor };
    case SWIM:
      return { ...state, count: state.count - state.factor };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }   
}

