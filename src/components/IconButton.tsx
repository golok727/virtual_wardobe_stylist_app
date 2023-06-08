import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
	icon: StaticImageData;
	customStyles?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
	icon,
	customStyles,
	...props
}) => {
	const buttonClasses = `
  w-10 aspect-square p-2 rounded-full shadow-sm bg-white flex items-center user-select-none
  border-[1px] border-red-300 hover:shadow-md hover:border-red-600 transition-all 
  ${customStyles ?? ""}
`;
	return (
		<motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.07 }}>
			<button className={buttonClasses} {...props}>
				<Image
					className="w-full h-full object-contain"
					src={icon}
					alt={"icon"}
				/>
			</button>
		</motion.div>
	);
};

export default IconButton;
