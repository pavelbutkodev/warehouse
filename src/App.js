import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Nav from "./component/Shared/Nav";
import {routes} from "./routes";

import styles from './styles.module.scss';

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Router>
			<Nav/>
				<Switch>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							component={route.component}
						/>
					))}
				</Switch>
			</Router>
		</div>
	)
}

export default App;
