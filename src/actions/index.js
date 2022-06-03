import axios from 'axios';
import { FETCH_USER } from "./types";

export const fetch_user = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}




