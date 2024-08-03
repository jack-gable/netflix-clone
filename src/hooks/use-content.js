import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function useContent(target) {
	const [content, setContent] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	const db = getFirestore(firebase);

	useEffect(() => {
		const getDocsContents = async () => {
			const data = await getDocs(collection(db, target));

			const content = data.docs.map((doc) => ({
				...doc.data(),
				docId: doc.id,
			}));

			setContent(content);
		};

		getDocsContents();
	}, []);

	return { [target]: content };
}
