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
			router.push("/");
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<button
			className="py-2 px-3 rounded-full border-[1px] border-zinc-700 font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-150"
			onClick={handleSignOut}
		>
			SignOut
		</button>
	);
};

export default SignOutButton;
