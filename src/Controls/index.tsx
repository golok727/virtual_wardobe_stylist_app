"use client";
import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";
import EditorTabs from "./EditorTabs";
import ClothTypeTabs from "./ClothTypeTabs";
import Button from "@/components/Button";
import { getContrastingColor } from "@/config/helper";
import { motion } from "framer-motion";
import Link from "next/link";
const Controls = () => {
	const snap = useSnapshot(state);
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
					delay: 0.9,
				}}
				animate={{ x: 0, scale: 1 }}
				className="absolute top-3 right-3"
			>
				<div className="grid gap-2 text-sm">
					<Link href={"/wardobe"}>
						<Button
							style={{
								color: getContrastingColor(snap.backgroundColor),
							}}
						>
							Go Back
						</Button>
					</Link>
					<Button>Save</Button>
				</div>
			</motion.div>
		</>
	);
};

export default Controls;
