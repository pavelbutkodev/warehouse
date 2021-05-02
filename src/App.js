import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

import Nav from "./component/Nav";
import {routes} from "./routes";

import styles from './styles.module.scss';

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Nav/>
			<Router>
				<Switch>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							component={route.component}
						/>
					))}
				</Switch>
				<Redirect from="/" to="/main/" />
			</Router>
		</div>
	)
}

export default App;
