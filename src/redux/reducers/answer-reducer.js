import { ADD_ANSWER } from "../actionTypes";

const initialAnswers = [];

export default (state = initialAnswers, action) => {
  switch(action.type) {
    case ADD_ANSWER:
      let newResultArray = [...state];
      newResultArray[action.payload.id] = action.payload.answer;
      return newResultArray;
    default:
      return state;
  }
}
