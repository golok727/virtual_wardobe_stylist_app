import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase_app from "./config";

export const uploadToFirebase = async (
	dataUrl: string,
	storagePath: string
) => {
	try {
		const storage = getStorage(firebase_app);
		const storageRef = ref(storage, storagePath);
		const blob = await fetch(dataUrl).then((res) => res.blob());
		await uploadBytes(storageRef, blob);
	} catch (err) {
		console.error("Error uploading canvas to Firebase:", err);
	}
};
