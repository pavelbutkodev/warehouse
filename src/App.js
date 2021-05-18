import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Nav from "./component/Shared/Nav";
import Sidebar from "./component/Shared/Sidebar";
import {routes} from "./routes";

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
	return (
		<div className={styles.wrapper}>
			<ToastContainer
				position="top-right"
				autoClose={3000}
			/>
			<Router>
				<Nav/>
				<div className={styles.mainContent}>
					<Sidebar/>
					<Switch>
						{routes.map((route, index) => (
							<Route
								exact={route.exact}
								key={index}
								path={route.path}
								component={route.component}
							/>
						))}
						<Redirect from='/' to='/warehouses/'/>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default App;
