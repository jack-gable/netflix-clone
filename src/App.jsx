import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Browse, SignIn, SignUp, Home } from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

const App = () => {
	const { user } = useAuthListener();

	return (
		<Router>
			<Routes>
				<Route
					path={ROUTES.SIGN_IN}
					element={
						<IsUserRedirect
							user={user}
							loggedInPath={ROUTES.BROWSE}
						>
							<SignIn />
						</IsUserRedirect>
					}
				/>
				<Route
					path={ROUTES.SIGN_UP}
					element={
						<IsUserRedirect
							user={user}
							loggedInPath={ROUTES.BROWSE}
						>
							<SignUp />
						</IsUserRedirect>
					}
				/>
				<Route
					path={ROUTES.BROWSE}
					element={
						<ProtectedRoute user={user} path={ROUTES.BROWSE}>
							<Browse />
						</ProtectedRoute>
					}
				/>
				<Route
					path={ROUTES.HOME}
					element={
						<IsUserRedirect
							user={user}
							loggedInPath={ROUTES.BROWSE}
						>
							<Home />
						</IsUserRedirect>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
