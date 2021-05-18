import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';


const configureStore = (initialState = {}) => {
	const composeEnhancers = composeWithDevTools({shouldHotReload: false});
	return createStore(reducers, initialState, composeEnhancers());
}

export default configureStore;