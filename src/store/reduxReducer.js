import { CLEAR, RESULT, ADD_NUMBER } from "./reduxType";

const initialState = {
  numbers : '',
}

export default function reduxReducer(state = initialState,action){
  switch (action.type) {
    case CLEAR:
      return{...state,numbers : ''};
    case RESULT:
      // eslint-disable-next-line
      return{...state,numbers : eval(state.numbers)};
    case ADD_NUMBER:
      return{...state, numbers : state.numbers + action.payload};
    default:
      return state;
  }
}