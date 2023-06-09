import {
	getDownloadURL,
	getMetadata,
	getStorage,
	ref,
	uploadBytes,
} from "firebase/storage";
import firebase_app from "./config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { User } from "firebase/auth";
export const uploadToFirebase = async (
	dataUrl: string,
	storagePath: string,
	user: User
) => {
	try {
		const storage = getStorage(firebase_app);
		const storageRef = ref(storage, storagePath);
		const blob = await fetch(dataUrl).then((res) => res.blob());
		const uploadTask = uploadBytes(storageRef, blob);

		const snapshot = await uploadTask;

		const downloadURL = await getDownloadURL(snapshot.ref);

		const firestore = getFirestore(firebase_app);
		const imageRef = collection(firestore, "wardobe");

		const newImage = { url: downloadURL, uid: user.uid };
		console.log(newImage);
		await addDoc(imageRef, newImage);
	} catch (err) {
		console.error("Error uploading canvas to Firebase:", err);
	}
};

// export const uploadToFirebase = async (
// 	dataUrl: string,
// 	storagePath: string
// ) => {
// 	try {
// 		const storage = getStorage(firebase_app);
// 		const storageRef = ref(storage, storagePath);
// 		const blob = await fetch(dataUrl).then((res) => res.blob());
// 		await uploadBytes(storageRef, blob);
// 	} catch (err) {
// 		console.error("Error uploading canvas to Firebase:", err);
// 	}
// };
