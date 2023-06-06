import { StaticImageData } from "next/image";
import React, { ChangeEventHandler } from "react";
interface FilePickerProps {
	text: string;
	id: string;
	icon?: StaticImageData;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}
const FilePicker: React.FC<FilePickerProps> = ({
	text,
	id,
	onChange,
	icon,
}) => {
	return (
		<div className="cursor-pointer bg-[rgb(235,44,108)] hover:scale-105 transition-all text-white font-bold test-sm rounded px-2 py-1 flex gap-2 ">
			{icon && (
				<div className="w-6">
					<img
						src={icon.src}
						className="w-full h-full object-contain"
						alt={""}
					/>
				</div>
			)}
			<label className="cursor-pointer" htmlFor={id}>
				{text}
			</label>
			<input
				accept="images/*"
				onChange={onChange}
				type="file"
				name=""
				id={id}
				className="hidden cursor-pointer"
			/>
		</div>
	);
};

export default FilePicker;
