import React, { FocusEventHandler } from "react";
import { sampleColorPalette } from "@/config/constants";
import { motion } from "framer-motion";
interface ColorPaletteProps {
	onChoose?: (color: string) => void;
}

const ColorPalettes: React.FC<ColorPaletteProps> = ({
	onChoose = () => {},
}) => {
	return (
		<>
			{sampleColorPalette.map((palette, idx) => (
				<motion.div
					key={idx}
					onClick={() => onChoose(palette)}
					initial={{ scale: 0 }}
					transition={{ delay: 0.1 * idx }}
					animate={{ scale: 1 }}
					className="w-5 aspect-square rounded-full cursor-pointer border-[1px] border-neutral-700"
					style={{ backgroundColor: palette }}
				></motion.div>
			))}
		</>
	);
};

export default ColorPalettes;
