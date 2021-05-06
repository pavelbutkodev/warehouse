import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Nav from "./component/Shared/Nav";
import Sidebar from "./component/Shared/Sidebar";
import {routes} from "./routes";

import styles from './styles.module.scss';

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Router>
				<Nav/>
				<div className={styles.mainContent}>
					<Sidebar/>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								component={route.component}
							/>
						))}
					</Switch>
				</div>
				<Redirect from='/' to='/main/'/>
			</Router>
		</div>
	)
}

export default App;
