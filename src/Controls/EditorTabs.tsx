import { EditorTabsList } from "@/config/constants";
import React from "react";
import Tab from "./Tab";
import { motion } from "framer-motion";
const EditorTabs = () => {
	return (
		<motion.div
			initial={{ x: -50, scale: 0 }}
			transition={{
				type: "spring",
				stiffness: 30,
				restDelta: 0.001,
				duration: 0.6,
			}}
			animate={{ x: 0, scale: 1 }}
			className="shadow-md flex flex-col gap-2 rounded-md bg-white  backdrop:blur-md "
			style={{
				padding: ".7rem .2rem",
				backgroundColor: "rgba(255, 255, 255, .6)",
			}}
		>
			{EditorTabsList.map((tab) => (
				<Tab key={tab.name} name={tab.name} icon={tab.icon} />
			))}
		</motion.div>
	);
};

export default EditorTabs;
