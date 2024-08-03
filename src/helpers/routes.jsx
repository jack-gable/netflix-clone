import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
	if (user) {
		return <Navigate to={loggedInPath} replace />;
	}

	return children;
}

export function ProtectedRoute({ user, children }) {
	if (!user) {
		return <Navigate to="/signin" replace />;
	}

	return children;
}
