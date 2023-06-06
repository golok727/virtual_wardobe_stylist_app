import { motion } from "framer-motion";
const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ x: -100, scale: 0, opacity: 0 }}
			transition={{
				duration: 0.3,
			}}
			animate={{ scale: 1, opacity: 1, x: 0 }}
			className="bg-black bg-opacity-10 p-2 rounded"
		>
			{children}
		</motion.div>
	);
};
export default SectionWrapper;
