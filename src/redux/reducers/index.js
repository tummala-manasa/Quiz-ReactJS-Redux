import { combineReducers } from "redux";
import questionReducer from "./question-reducer";
import answerReducer from "./answer-reducer";

export default combineReducers({ questionReducer, answerReducer });
