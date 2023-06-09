"use client";
import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";
import EditorTabs from "./EditorTabs";
import ClothTypeTabs from "./ClothTypeTabs";
import { canvasToDataUrl, downloadCanvasToImage } from "@/config/helper";
import { motion } from "framer-motion";
import Link from "next/link";
import IconButton from "@/components/IconButton";
import { IconBack, IconDownload, IconSave } from "@/assets";
import { uploadToFirebase } from "@/firebase/upload";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
const Controls = () => {
	const snap = useSnapshot(state);
	const { authUser } = useAuthContext();
	const handleImageUpload = async () => {
		try {
			state.isSaving = true;

			const dataUrl = await canvasToDataUrl();
			await uploadToFirebase(
				dataUrl,
				`images/shirt-${Math.floor(Math.random() * 1000)}-${Date.now()}`,
				authUser as User
			);
			state.isSaving = false;
		} catch (err) {}
	};
	return (
		<>
			<div className="absolute top-1/2 left-2">
				<EditorTabs />
			</div>

			<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
				<ClothTypeTabs />
			</div>

			<motion.div
				initial={{ x: 50, scale: 0 }}
				transition={{
					type: "spring",
					stiffness: 30,
					restDelta: 0.001,
					duration: 0.6,
				}}
				animate={{ x: 0, scale: 1 }}
				className="absolute top-3 right-3"
			>
				<div className="grid gap-2 text-sm">
					<Link href={"/wardobe"}>
						<IconButton icon={IconBack} />
					</Link>

					<IconButton icon={IconDownload} onClick={() => handleImageUpload()} />

					<IconButton
						icon={IconSave}
						onClick={() => {
							downloadCanvasToImage();
						}}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default Controls;
