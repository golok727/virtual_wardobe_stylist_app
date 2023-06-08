import React from "react";
import { EditorTabNames } from "@/config/constants";
import ColorTab from "./EditorTabs/ColorTab";
import FileTab from "./EditorTabs/FileTab";
import EditTab from "./EditorTabs/EditTab";

import { motion } from "framer-motion";
interface ModalProps {
	modalFor: keyof typeof EditorTabNames;
}

const generateModalContent = (type: keyof typeof EditorTabNames) => {
	switch (type) {
		case EditorTabNames.COLOR_PICKER: {
			return <ColorTab />;
		}
		case EditorTabNames.FILE_PICKER:
			return <FileTab />;

		case EditorTabNames.EDIT:
			return <EditTab />;
	}
};

const Modal: React.FC<ModalProps> = ({ modalFor }) => {
	return (
		<motion.div
			key={modalFor}
			initial={{ x: -100, scale: 0, opacity: 0 }}
			transition={{
				duration: 0.3,
			}}
			animate={{ scale: 1, opacity: 1, x: 0 }}
			className="absolute left-full top-0 ml-2 bg-white bg-opacity-90 min-h-full px-2 py-3 w-max border-[1px] border-neutral-200 rounded-md shadow-xl"
		>
			{generateModalContent(modalFor)}
		</motion.div>
	);
};

export default Modal;
