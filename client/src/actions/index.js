import axios from 'axios';
import { FETCH_USER } from './types';

//action-creator with redux-thunk, uses dispatch to dispatch action from async request
export const fetchUser = () => async dispatch => {
       const res = await axios.get('/api/current_user');
       dispatch({ type: FETCH_USER, payload: res.data});
};
