import ColorPicker from "@/components/ColorPicker";
import { getContrastingColor } from "@/config/helper";
import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";
const ColorTab: React.FC = () => {
	const snap = useSnapshot(state);
	return (
		<div>
			<section className="grid gap-2">
				<div>
					<p className="font-bold text-xs">Choose Shirt Color:</p>
					<ColorPicker
						color={snap.color}
						onChange={(e) => (state.color = e.target.value)}
					/>
				</div>
				<div>
					<p className="font-bold text-xs">Transparent BG?</p>
					<input
						type="checkbox"
						name="transparent-bg-check"
						id="transparent-bg-check"
						onChange={(e) => (state.transparentBackground = e.target.checked)}
						checked={snap.transparentBackground}
					/>
				</div>

				{!snap.transparentBackground && (
					<motion.div
						initial={{ x: -100, scale: 0, opacity: 0 }}
						transition={{
							duration: 0.3,
						}}
						animate={{ scale: 1, opacity: 1, x: 0 }}
						className="bg-black bg-opacity-10 p-2 rounded"
					>
						<div>
							<p className="font-bold text-xs">Choose Background Color:</p>
							<ColorPicker
								color={snap.backgroundColor}
								onChange={(e) => (state.backgroundColor = e.target.value)}
							/>
						</div>

						<button
							className="text-xs font-bold bg-blue-200 px-2 py-1 rounded-full my-2 hover:bg-blue-300  transition-colors "
							onClick={() =>
								(state.backgroundColor = getContrastingColor(snap.color))
							}
						>
							Fill with Contrast Color
						</button>
					</motion.div>
				)}
			</section>
		</div>
	);
};

export default ColorTab;
