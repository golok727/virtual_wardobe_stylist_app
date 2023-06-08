import { motion } from "framer-motion";
const SectionWrapper = ({
	children,
	customStyles,
}: {
	children: React.ReactNode;

	customStyles?: string;
}) => {
	return (
		<motion.div
			initial={{ x: -100, scale: 0, opacity: 0 }}
			transition={{
				duration: 0.3,
			}}
			animate={{ scale: 1, opacity: 1, x: 0 }}
			className={`${customStyles} bg-white bg-opacity-40 p-2 shadow-md border-[1px] border-neutral-200 rounded-md`}
		>
			{children}
		</motion.div>
	);
};
export default SectionWrapper;
