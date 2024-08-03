import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const firebaseConfig = {
	apiKey: "AIzaSyDQNr-MrQ3xINLOhpaBq1t4cyNB5dumTwQ",
	authDomain: "netflix-clone-b6c6c.firebaseapp.com",
	projectId: "netflix-clone-b6c6c",
	storageBucket: "netflix-clone-b6c6c.appspot.com",
	messagingSenderId: "187281368528",
	appId: "1:187281368528:web:5a3edda2b4fa9e2a7845d5",
};

const firebase = initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
