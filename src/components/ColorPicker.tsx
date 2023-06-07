import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface ColorPickerProps {
	color: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
	color,
	onChange = () => {},
	onBlur,
}) => {
	return (
		<input
			type="color"
			value={color}
			onBlur={onBlur}
			onChange={onChange}
			className="color-input my-1"
		/>
	);
};

export default ColorPicker;
