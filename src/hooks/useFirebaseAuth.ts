import {
	User,
	createUserWithEmailAndPassword,
	getAuth,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebase_app from "@/firebase/config";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app);
export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	const clear = () => {
		setAuthUser(null);
	};

	async function signIn(email: string, password: string) {
		let result = null;
		let error: FirebaseError | null = null;

		try {
			result = await signInWithEmailAndPassword(auth, email, password);
		} catch (err: any) {
			error = err;
		}

		return { result, error };
	}

	async function signUp(email: string, password: string) {
		let result = null;
		let error: FirebaseError | null = null;

		try {
			result = await createUserWithEmailAndPassword(auth, email, password);
		} catch (err: any) {
			error = err;
		}

		return { result, error };
	}

	async function appSignOut() {
		try {
			await signOut(auth);
			clear();
			console.log("signout");
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
				setIsLoading(false);
			} else {
				setAuthUser(null);
				setIsLoading(false);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return {
		authUser,
		isLoading,
		signIn,
		signUp,
		appSignOut,
	};
}
