import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type TabProps = {
	name: string;
	icon: StaticImageData;
	handleClick?: (...args: any) => void;
};

const Tab: React.FC<TabProps> = ({ icon, name, handleClick = () => {} }) => {
	return (
		<motion.div whileHover={{ scale: 1.05 }} className="">
			<div onClick={() => handleClick(name)} className="cursor-pointer w-10">
				<img
					src={icon.src}
					className="object-contain w-full h-full"
					alt={name}
				/>
			</div>
		</motion.div>
	);
};

export default Tab;
