"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import IconButton from "./IconButton";
import { IconExit } from "@/assets";
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
	return <IconButton icon={IconExit} onClick={handleSignOut} />;
};

export default SignOutButton;
