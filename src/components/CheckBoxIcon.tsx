import Image, { StaticImageData } from "next/image";
import React, { ChangeEventHandler } from "react";

interface CheckBoxIconProps {
	image: StaticImageData;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	id: string;
	checked: boolean;
}
const CheckBoxIcon: React.FC<CheckBoxIconProps> = ({
	image,
	id,
	checked,
	onChange,
}) => {
	return (
		<label className="flex user-select-none">
			<div
				className={`bg-white border-[1px] w-[2.5em] h-[2.5em] aspect-square hover:border-red-300 ${
					checked ? "border-red-500" : "border-transparent"
				}  hover:bg-opacity-40 cursor-pointer border-[1px] border-blue-300 rounded-full p-2 shadow-md transition-all`}
			>
				<Image className="w-full h-full object-contain" src={image} alt="" />
			</div>
			<input
				className="appearance-none"
				type="checkbox"
				name=""
				id={id}
				onChange={onChange}
				checked={checked}
			/>
		</label>
	);
};

export default CheckBoxIcon;
