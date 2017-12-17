import axios from 'axios';

import { apiBaseURL } from '../Utils/Constants';

import {
	FETCHING_COIN_DATA,
	FETCHING_COIN_DATA_SUCCESS,
	FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

export default FetchCoinData = () => {
	return dispatch => {
		dispatch({ type: FETCHING_COIN_DATA })

		return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
			.then(res => {
				dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
			})
			.catch(err => {
				dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
			});
	}
}

//When requesting for data, there are 3 states.
/*
    Requesting the data.
    Data Requesting Successful (200 — got the data!)
    Data Requesting Fail
*/