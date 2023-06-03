import React from "react";
import { motion } from "framer-motion";

interface ErrorMessageProps {
	message: string;
	hideAfterTimeOut?: boolean;
	timeout?: number;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({
	message,
	hideAfterTimeOut = false,
	timeout = 2000,
}) => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0, left: -10000 }}
			animate={{ scale: 1, opacity: 1, left: 30 }}
			className="bg-red-500 font-bold text-white rounded px-3 py-2 absolute bottom-14 max-w-[30ch] lg:max-w-[60ch]"
		>
			{message}
		</motion.div>
	);
};

export default ErrorMessage;
