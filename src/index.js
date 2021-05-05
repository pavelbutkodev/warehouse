import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/store';
import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';


ReactDOM.render(
	<Provider store={configureStore()}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();
