//reducers are asynchronous by default — that’s why they are anonymous functions — all reducers get invoked after an action. That’s why we have the switch conditional to handle appropriate actions.

import {
	FETCHING_COIN_DATA,
	FETCHING_COIN_DATA_SUCCESS,
	FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
	isFetching: false,
	data: null,
	hasError: false,
	errorMessage: null
}

export default CryptoReducer = (state = initialState, action) => {

	switch(action.type) {
		case FETCHING_COIN_DATA:

			return { 
				...state,
				isFetching: true, 
			}

		case FETCHING_COIN_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,				
			}

		case FETCHING_COIN_DATA_FAIL:
			return {
				...state,
				hasError: true,
			}

		default:
			return state;
	}
}