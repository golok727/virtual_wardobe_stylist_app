"use client";
import React, { createContext, useContext } from "react";

import { User } from "firebase/auth";

import useFirebaseAuth from "@/hooks/useFirebaseAuth";

interface AuthContextType {
	authUser: User | null;
	isLoading: boolean;
	signIn: (email: string, password: string) => Promise<any>;
	signUp: (email: string, password: string) => Promise<any>;
	appSignOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
	authUser: null,
	isLoading: true,
	appSignOut: async () => {},
	signIn: async () => {},
	signUp: async () => {},
});

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProps {
	children: React.ReactNode;
}
export const AuthContextProvider: React.FC<AuthContextProps> = ({
	children,
}) => {
	const { authUser, isLoading, appSignOut, signIn, signUp } = useFirebaseAuth();

	return (
		<AuthContext.Provider
			value={{ authUser, isLoading, appSignOut, signIn, signUp }}
		>
			{isLoading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};
