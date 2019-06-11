import { ADD_ANSWER } from '../actionTypes';

export const updateResultArray = (id, answer) => ({
  type: ADD_ANSWER,
  payload: {
    id,
    answer
  }
});
