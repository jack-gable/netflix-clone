import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function useAuthListener() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("authUser"))
	);
	const auth = getAuth();

	useEffect(() => {
		const listener = onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				localStorage.setItem("authUser", JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem("authUser");
				setUser(null);
				signOut(auth);
			}
		});

		return () => listener();
	}, []);

	return { user };
}
