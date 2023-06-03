"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
const SignOutButton = () => {
	const { appSignOut } = useAuthContext();
	const router = useRouter();
	async function handleSignOut() {
		try {
			await appSignOut();
			router.push("/login");
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<button
			className="py-2 px-3 bg-red-500 rounded-md text-white font-bold cursor-pointer"
			onClick={handleSignOut}
		>
			SignOut
		</button>
	);
};

export default SignOutButton;
