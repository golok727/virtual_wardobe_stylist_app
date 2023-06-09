import { useAuthContext } from "@/context/AuthContext";
import firebase_app from "@/firebase/config";
import { getAuth } from "firebase/auth";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "./utils/Wrapper";
const UserWardobe = () => {
	const firestore = getFirestore(firebase_app);
	const [savedUserWardrobes, setSavedUserWardrobes] = useState<
		{ id: string; uid: string; url: string }[]
	>([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		(async () => {
			if (authUser) {
				const wardobeRef = collection(firestore, "wardobe");
				const q = query(wardobeRef, where("uid", "==", authUser?.uid ?? ""));
				const querySnapshot = await getDocs(q);

				const wardrobes = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...(doc.data() as { uid: string; url: string }),
				}));
				console.log(wardrobes);

				setSavedUserWardrobes(wardrobes);
			}
		})();
	}, [authUser, firestore]);

	return (
		<div className="grid grid-cols-3 gap-7 place-items-center px-2 py-3">
			{savedUserWardrobes &&
				savedUserWardrobes.length > 0 &&
				savedUserWardrobes.map((wardrobe, idx) => (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						transition={{}}
						whileHover={{ scale: 1.02 }}
						animate={{ scale: 1, opacity: 1 }}
						key={wardrobe.id}
						className="overflow-hidden rounded-md  shadow-xl cursor-pointer bg-white border-[1px] border-neutral-200"
					>
						<Image
							width={400}
							height={400}
							src={wardrobe.url}
							alt={"image"}
							className="object-contain"
						/>
					</motion.div>
				))}
		</div>
	);
};

export default UserWardobe;
