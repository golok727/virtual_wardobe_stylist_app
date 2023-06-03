import React, { HTMLAttributes } from "react";
const styles = {
	outline:
		"py-2 px-4 rounded-full border-[1px] border-zinc-500 font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-150",

	fill: "py-2 px-4 rounded-full text-white font-bold bg-blue-700 font-bold cursor-pointer hover:bg-blue-900  transition-colors duration-150",
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: keyof typeof styles;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "fill",
	...props
}) => {
	return (
		<button className={styles[variant]} {...props}>
			{children}
		</button>
	);
};

export default Button;
