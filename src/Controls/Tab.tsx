import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Tab = ({ icon, name }: { name: string; icon: StaticImageData }) => {
	return (
		<motion.div whileHover={{ scale: 1.05 }} className="">
			<div
				className="cursor-pointer"
				style={{ height: "2.5rem", aspectRatio: "1/1" }}
			>
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
