import React, { ButtonHTMLAttributes } from "react";
const styles = {
	outline:
		"py-2 px-4 rounded-full border-[1px] border-zinc-500 font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-150",

	fill: "py-2 px-4 rounded-full text-white font-bold bg-blue-700 font-bold cursor-pointer hover:bg-blue-900  transition-colors duration-150",
	submit:
		"py-2 px-4 rounded-full text-black font-bold bg-white font-bold cursor-pointer hover:bg-opacity-95  transition-opacity duration-150",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: keyof typeof styles;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "fill",
	...props
}) => {
	const buttonClassName = `${styles[variant]}`;
	return (
		<button {...props} className={buttonClassName}>
			{children}
		</button>
	);
};

export default Button;
