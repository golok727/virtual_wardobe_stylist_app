import ColorPicker from "@/components/ColorPicker";
import FilePicker from "@/components/FilePicker";
import LayoutConfig from "@/components/LayoutConfig";
import React from "react";
import { EditorTabNames } from "@/config/constants";

interface ModalProps {
	modalFor: keyof typeof EditorTabNames;
}

const generateModalContent = (type: keyof typeof EditorTabNames) => {
	switch (type) {
		case EditorTabNames.COLOR_PICKER: {
			return <ColorPicker />;
		}
		case EditorTabNames.FILE_PICKER:
			return <FilePicker />;

		case EditorTabNames.EDIT:
			return <LayoutConfig />;
	}
};

const Modal: React.FC<ModalProps> = ({ modalFor }) => {
	console.log(modalFor);
	return (
		<div className="absolute left-full top-0 ml-2 bg-slate-100 min-h-full bg-opacity-75 backdrop-blur-sm rounded-md">
			{generateModalContent(modalFor)}
		</div>
	);
};

export default Modal;
