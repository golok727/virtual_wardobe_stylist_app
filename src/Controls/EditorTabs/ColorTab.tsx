import ColorPicker from "@/components/ColorPicker";
import { getContrastingColor } from "@/config/helper";
import state from "@/store";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";
import ColorPalettes from "@/components/ColorPalettes";

import CheckBoxIcon from "@/components/CheckBoxIcon";
import { ColorPalleteIcon, TransparentIcon } from "@/assets";
const ColorTab: React.FC = () => {
	const [showPallets, setShowPallets] = useState(false);

	const snap = useSnapshot(state);
	return (
		<div className={`grid ${showPallets ? "grid-cols-2" : "grid-cols-1"}`}>
			<section className="grid gap-2 px-2">
				<div>
					<p className="font-bold text-xs">Choose Shirt Color:</p>
					<ColorPicker
						color={snap.color}
						onChange={(e) => (state.color = e.target.value)}
						onBlur={(e) =>
							(state.recentSwatches = [
								e.target.value,
								...snap.recentSwatches,
							].splice(0, 12))
						}
					/>
				</div>

				<div className="flex gap-2">
					<CheckBoxIcon
						image={ColorPalleteIcon}
						checked={showPallets}
						id="show-pallete"
						onChange={(ev) => {
							setShowPallets(ev.target.checked);
						}}
					/>
					<CheckBoxIcon
						image={TransparentIcon}
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
			{showPallets && (
				<section className="border-l-[1px] border-l-neutral-400 px-2 grid gap-2">
					<div className="grid gap-2 lg:grid-cols-6 grid-cols-5 bg-black bg-opacity-50 rounded-md py-2 px-3">
						<ColorPalettes
							onChoose={(color) => {
								state.color = color;
							}}
						/>
					</div>
					{snap.recentSwatches && snap.recentSwatches.length > 0 && (
						<div className="grid gap-2 lg:grid-cols-6 grid-cols-5 bg-black bg-opacity-60 rounded-md py-2 px-3">
							{snap.recentSwatches.map((palette, idx) => (
								<motion.div
									key={idx}
									initial={{ scale: 0 }}
									transition={{ delay: 0.1 * idx }}
									animate={{ scale: 1 }}
									className="w-5 aspect-square rounded-full cursor-pointer"
									style={{ backgroundColor: palette }}
								></motion.div>
							))}
						</div>
					)}
				</section>
			)}
		</div>
	);
};

export default ColorTab;
