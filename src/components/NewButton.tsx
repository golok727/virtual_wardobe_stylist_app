import { PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const NewButton = () => {
	return (
		<motion.div
			whileHover={{ scale: 1.05, rotate: [90, 0] }}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				ease: "easeIn",
				duration: 0.2,
			}}
			className=" text-white bg-gradient-to-r from-red-500 cursor-pointer to-violet-400 w-fit rounded-full shadow-md p-3"
		>
			<PlusIcon width={30} style={{ strokeWidth: "5px" }} />
		</motion.div>
	);
};

export default NewButton;
