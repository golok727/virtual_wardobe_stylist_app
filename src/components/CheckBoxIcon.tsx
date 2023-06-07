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
		<label className="w-fit">
			<div
				className={`bg-green-500 w-[2.5em] aspect-square ${
					checked ? "bg-opacity-20" : "bg-opacity-0"
				}  hover:bg-opacity-40 cursor-pointer border-[1px] border-blue-300 rounded-full p-2 shadow-sm transition-all`}
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
