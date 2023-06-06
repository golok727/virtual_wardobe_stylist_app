import { EditorTabsList } from "@/config/constants";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Tab from "./Tab";
import { useState } from "react";
import { EditorTabNames } from "@/config/constants";
const EditorTabs = () => {
	const [currentEditorTab, setCurrentEditorTab] = useState<
		keyof typeof EditorTabNames | null
	>(null);
	const handleTabClick = (name: string) => {
		if (name === currentEditorTab) {
			setCurrentEditorTab(null);
			return;
		}
		setCurrentEditorTab(name as keyof typeof EditorTabNames);
	};
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
			className="shadow-xl flex flex-col gap-2 rounded-md bg-slate-100 bg-opacity-75 backdrop-blur-md  p-2"
		>
			{EditorTabsList.map((tab) => (
				<Tab
					key={tab.name}
					name={tab.name}
					icon={tab.icon}
					handleClick={handleTabClick}
				/>
			))}

			{currentEditorTab !== null && <Modal modalFor={currentEditorTab} />}
		</motion.div>
	);
};

export default EditorTabs;
