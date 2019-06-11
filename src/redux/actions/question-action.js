import { ADD_QUESTION } from '../actionTypes';

export const updateQuestion = (newQuestion) => {
  return dispatch => {
    // if local storage contains questions, pull and update stored data. Store new object otherwise
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    questions.push(newQuestion);
    localStorage.setItem("questions", JSON.stringify(questions));

    dispatch({type: ADD_QUESTION, payload: newQuestion});
  }
}
