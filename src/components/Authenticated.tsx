"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import React, { ReactNode, useEffect } from "react";
type AuthenticatedProps = {
	children: ReactNode;
};
const Authenticated: React.FC<AuthenticatedProps> = ({ children }) => {
	const router = useRouter();
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (!authUser) {
			router.push("/login");
		}
	}, []);

	// Render the wrapped component

	return <>{children}</>;
};
export default Authenticated;
