import {
	IconAdd,
	IconDown,
	IconLeft,
	IconMinus,
	IconMove,
	IconReset,
	IconRight,
	IconUp,
	ZoomControlIcon,
} from "@/assets";
import CheckBoxIcon from "@/components/CheckBoxIcon";
import IconButton from "@/components/IconButton";
import state from "@/store";
import React, { MouseEventHandler, useState } from "react";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
const EditTab = () => {
	const snap = useSnapshot(state);
	const [logoAdjust, setLogoAdjust] = useState(false);

	return (
		<div
			className={`grid gap-4 min-w-[7rem] ${
				logoAdjust ? "grid-cols-2" : "grid-cols-1"
			}`}
		>
			{/* Left */}
			<section className="grid gap-2">
				<SectionWrapper>
					<h3 className="font-bold text-xs my-2">Editor Controls</h3>
					<CheckBoxIcon
						id="allow-controls"
						image={ZoomControlIcon}
						checked={snap.controls}
						onChange={(e) => {
							state.controls = e.target.checked;
						}}
					/>
				</SectionWrapper>

				<SectionWrapper>
					<div className=" p-2">
						<h3 className="font-bold text-xs my-2">Shirt Logo Controls</h3>
						<CheckBoxIcon
							id="image-adjust"
							image={IconMove}
							checked={logoAdjust}
							onChange={(e) => {
								setLogoAdjust(e.target.checked);
							}}
						/>
					</div>
				</SectionWrapper>
			</section>

			{/* Right */}
			{logoAdjust && (
				<motion.section
					initial={{ scale: 0, x: -50 }}
					transition={{ delay: 0.1 }}
					animate={{ scale: 1, x: 0 }}
					className={`grid gap-4`}
				>
					<PositionControls
						onUpBtn={() => {
							const newY = Math.min(0.12, state.shirtPos.y + 0.01);
							state.shirtPos.y = newY;
						}}
						onDownBtn={() => {
							const newY = Math.max(-0.12, state.shirtPos.y - 0.01);
							state.shirtPos.y = newY;
						}}
						onLeftBtn={() => {
							const newX = Math.max(-0.09, state.shirtPos.x - 0.01);
							state.shirtPos.x = newX;
						}}
						onRightBtn={() => {
							const newX = Math.min(0.09, state.shirtPos.x + 0.01);

							state.shirtPos.x = newX;
						}}
					/>

					{/* Zoom ,Reset */}
					<div className="flex gap-2 justify-center">
						<IconButton
							icon={IconAdd}
							onClick={() => {
								const newScale = Math.min(snap.logoScale * 10 + 1, 10);
								state.logoScale = newScale / 10;
							}}
						/>
						<IconButton
							icon={IconMinus}
							onClick={() => {
								const newScale = Math.max(snap.logoScale * 10 - 1, 2);

								state.logoScale = newScale / 10;
							}}
						/>

						<IconButton
							icon={IconReset}
							onClick={() => {
								state.shirtPos = { ...state.shirtPos, x: 0, y: 0.04 };
								state.logoScale = 1;
							}}
						/>
					</div>
				</motion.section>
			)}
		</div>
	);
};

interface PositionControlsProps {
	onDownBtn: () => void;
	onLeftBtn: () => void;
	onUpBtn: () => void;
	onRightBtn: () => void;
}

const PositionControls: React.FC<PositionControlsProps> = ({
	onDownBtn,
	onLeftBtn,
	onRightBtn,
	onUpBtn,
}) => {
	const [intervalId, setIntervalId] = useState<number | null>(null);

	const handleMouseDown = (callback: () => void) => {
		callback();

		const id = window.setInterval(callback, 100);
		setIntervalId(id);
	};

	const handleMouseUp = () => {
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	return (
		<div className="bg-white grid rounded-full shadow-md border-[1px] border-neutral-200">
			<div className="grid gap-2 p-2  place-items-center text-xs grid-cols-2 ">
				<div className="col-span-2">
					<IconButton
						icon={IconUp}
						customStyles="w-7"
						// onClick={onUpBtn}
						onMouseDown={() => handleMouseDown(onUpBtn)}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchStart={handleMouseUp}
						onTouchEnd={handleMouseUp}
					/>
				</div>

				<div>
					<IconButton
						icon={IconLeft}
						customStyles="w-7"
						onMouseDown={() => handleMouseDown(onLeftBtn)}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchStart={handleMouseUp}
						onTouchEnd={handleMouseUp}
					/>
				</div>

				<div>
					<IconButton
						icon={IconRight}
						customStyles="w-7"
						onClick={onRightBtn}
						onMouseDown={() => handleMouseDown(onRightBtn)}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchStart={handleMouseUp}
						onTouchEnd={handleMouseUp}
					/>
				</div>

				<div className="col-span-2">
					<IconButton
						icon={IconDown}
						customStyles="w-7"
						onMouseDown={() => handleMouseDown(onDownBtn)}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchStart={handleMouseUp}
						onTouchEnd={handleMouseUp}
					/>
				</div>
			</div>
		</div>
	);
};

export default EditTab;
