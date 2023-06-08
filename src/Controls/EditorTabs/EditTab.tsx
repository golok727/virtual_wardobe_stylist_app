import {
	IconAdd,
	IconDown,
	IconLeft,
	IconMinus,
	IconMove,
	IconRight,
	IconUp,
	ZoomControlIcon,
} from "@/assets";
import CheckBoxIcon from "@/components/CheckBoxIcon";
import IconButton from "@/components/IconButton";
import state from "@/store";
import { MouseEventHandler, useState } from "react";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
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
					<PositionControls onDownBtn={() => console.log("down")} />

					<div className="flex gap-2 justify-center">
						<IconButton
							icon={IconAdd}
							onClick={(e) => {
								const newScale = Math.min(snap.logoScale * 10 + 1, 10);
								console.log(newScale);
								console.log(snap.logoScale);

								state.logoScale = newScale / 10;
							}}
						/>
						<IconButton
							icon={IconMinus}
							onClick={(e) => {
								const newScale = Math.max(snap.logoScale * 10 - 1, 2);
								console.log(newScale);
								console.log(snap.logoScale);

								state.logoScale = newScale / 10;
							}}
						/>
					</div>
				</motion.section>
			)}
		</div>
	);
};
interface PositionControlsProps {
	onDownBtn?: MouseEventHandler<HTMLButtonElement>;
	onLeftBtn?: MouseEventHandler<HTMLButtonElement>;
	onUpBtn?: MouseEventHandler<HTMLButtonElement>;
	onRightBtn?: MouseEventHandler<HTMLButtonElement>;
}

const PositionControls: React.FC<PositionControlsProps> = ({
	onDownBtn,
	onLeftBtn,
	onRightBtn,
	onUpBtn,
}) => {
	return (
		<div className="bg-white grid rounded-full shadow-md border-[1px] border-neutral-200">
			<div className="grid gap-2 p-2  place-items-center text-xs grid-cols-2 ">
				<div className="col-span-2">
					<IconButton icon={IconUp} customStyles="w-7" onClick={onUpBtn} />
				</div>

				<div>
					<IconButton icon={IconLeft} customStyles="w-7" onClick={onLeftBtn} />
				</div>

				<div>
					<IconButton
						icon={IconRight}
						customStyles="w-7"
						onClick={onRightBtn}
					/>
				</div>

				<div className="col-span-2">
					<IconButton icon={IconDown} customStyles="w-7" onClick={onDownBtn} />
				</div>
			</div>
		</div>
	);
};

export default EditTab;
