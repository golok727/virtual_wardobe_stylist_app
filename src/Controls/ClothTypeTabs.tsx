import { EditorClothTypeTabList, EditorTabsList } from "@/config/constants";
import React from "react";
import Tab from "./Tab";
import { motion } from "framer-motion";
const ClothTypeTabs = () => {
	return (
		<motion.div
			initial={{ y: 50, scale: 0 }}
			transition={{
				type: "spring",
				stiffness: 30,
				restDelta: 0.001,
				duration: 0.6,
			}}
			animate={{ y: 0, scale: 1 }}
			className="shadow-md flex gap-2 rounded-md bg-white  backdrop:blur-md "
			style={{
				padding: ".2rem .7rem",
				backgroundColor: "rgba(255, 255, 255, .6)",
			}}
		>
			{EditorClothTypeTabList.map((tab) => (
				<Tab key={tab.name} name={tab.name} icon={tab.icon} />
			))}
		</motion.div>
	);
};

export default ClothTypeTabs;
