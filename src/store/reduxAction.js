import { ADD_NUMBER, CLEAR, RESULT } from "./reduxType";

export function colectionNumber(number){
  if(number === 'c'){
    return{
      type: CLEAR
    }
  }

  if(number === '='){
    return{
      type : RESULT
    }
  }

  return{
    type: ADD_NUMBER,
    payload : number
  }
}