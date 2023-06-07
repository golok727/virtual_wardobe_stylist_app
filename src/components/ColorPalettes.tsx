import React, { FocusEventHandler } from "react";
import { sampleColorPalette } from "@/config/constants";
import { motion } from "framer-motion";
import { scale } from "maath/dist/declarations/src/vector2";
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
					className="w-5 aspect-square rounded-full cursor-pointer"
					style={{ backgroundColor: palette }}
				></motion.div>
			))}
		</>
	);
};

export default ColorPalettes;
