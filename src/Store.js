import { Platform } from 'react-native';

// createStore() is needed to create our initial store. We pass this store to the <Provider>
//createStore() accepts the following arguments:

    //reducer
    //preloaded state
    //enhancer

//applyMiddleware allows us to use the thunk, promise and logger

//compose() — Composes functions from right to left.

import { createStore, applyMiddleware, compose } from 'redux';

import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
	//import our RootReducer and pass it as the first argument to the createStore() function.
	RootReducer,
	compose(
		//We pass our middleware and devTools as the arguments for compose.
		middleware,
		devTools({
			name: Platform.OS,
			hostname: 'localhost',
			port: 5678
		}),
	)
);

//Lastly we expose our store to the outside world.
export default Store;