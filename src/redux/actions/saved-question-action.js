import { GET_SAVED_QUESTION } from '../actionTypes';

export const getSavedQuestions = () => {
  return dispatch => {
    if(localStorage.getItem("questions")){
      let storedQuestions = JSON.parse(localStorage.getItem("questions"));
      dispatch({type: GET_SAVED_QUESTION, payload: storedQuestions});
    }
  }
}
