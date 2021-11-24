import { Route, Switch } from "react-router";
import useGoogleAnalytics from "../Hook/useGoogleAnalytics";
import Home from "../Screens/Home/Home";
const Routes = () => {
	useGoogleAnalytics();

	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
};

export default Routes;
