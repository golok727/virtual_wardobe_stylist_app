import React, { ChangeEventHandler } from "react";

interface ColorPickerProps {
	color: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
	onChange = () => {},
	color,
}) => {
	return (
		<input
			type="color"
			value={color}
			onChange={onChange}
			className="color-input my-1"
		/>
	);
};

export default ColorPicker;
