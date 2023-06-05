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
			<div
				style={{
					overflow: "hidden",
					position: "absolute",
					left: "1rem",
					top: "50%",
				}}
			>
				<EditorTabs />
			</div>

			<div
				style={{
					position: "absolute",
					bottom: "1em",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			>
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
				style={{ position: "absolute", top: "2rem", right: "2rem" }}
			>
				<div className="grid gap-2 text-sm">
					<Link href={"/wardobe"}>
						<Button
							style={{
								background: snap.color,
								color: getContrastingColor(snap.color),
							}}
						>
							Go Back
						</Button>
					</Link>
					<Button>Save</Button>
					<input
						type="color"
						value={state.color}
						onChange={(ev) => (state.color = ev.target.value)}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default Controls;
