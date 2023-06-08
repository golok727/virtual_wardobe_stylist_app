import { EditorTabsList } from "@/config/constants";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Tab from "./Tab";
import { EditorTabNames } from "@/config/constants";
import { useSnapshot } from "valtio";
import state from "@/store";
const EditorTabs = () => {
	const snap = useSnapshot(state);

	const handleTabClick = (name: string) => {
		if (name === snap.currentEditorTab) {
			state.currentEditorTab = null;
			return;
		}
		state.currentEditorTab = name as keyof typeof EditorTabNames;
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
			className="shadow-xl flex flex-col gap-2 rounded-md bg-white bg-opacity-90 backdrop-blur-md  p-2"
		>
			{EditorTabsList.map((tab) => (
				<Tab
					current={tab.name === snap.currentEditorTab}
					key={tab.name}
					name={tab.name}
					icon={tab.icon}
					handleClick={handleTabClick}
				/>
			))}

			{snap.currentEditorTab !== null && (
				<Modal modalFor={snap.currentEditorTab} />
			)}
		</motion.div>
	);
};

export default EditorTabs;
