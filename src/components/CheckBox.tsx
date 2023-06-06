import React, { ChangeEventHandler } from "react";

interface CheckBoxProps {
	text: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	id: string;
	checked: boolean;
}
const CheckBox: React.FC<CheckBoxProps> = ({ text, checked, onChange }) => {
	return (
		<div className="flex gap-2 items-center my-2">
			<label className="text-xs font-bold" htmlFor="apply-print">
				{text}
			</label>
			<input
				type="checkbox"
				name=""
				id="apply-print"
				onChange={onChange}
				checked={checked}
			/>
		</div>
	);
};

export default CheckBox;
