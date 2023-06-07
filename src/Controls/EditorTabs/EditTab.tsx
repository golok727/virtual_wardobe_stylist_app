import { ZoomControlIcon } from "@/assets";
import CheckBox from "@/components/CheckBox";
import CheckBoxIcon from "@/components/CheckBoxIcon";
import state from "@/store";
import React, { useState } from "react";
import { useSnapshot } from "valtio";

const EditTab = () => {
	const snap = useSnapshot(state);
	const [range, setRange] = useState(snap.logoScale * 10);
	return (
		<div className="grid gap-3">
			<div className="grid">
				<label htmlFor="logo-size">LogoSize</label>
				<input
					type="range"
					name=""
					id="logo-size"
					min={2}
					max={10}
					step={1}
					value={range}
					onChange={(e) => {
						setRange(parseInt(e.target.value));

						state.logoScale = parseInt(e.target.value) / 10;
						console.log(parseInt(e.target.value) / 10);
					}}
				/>
			</div>

			<div>
				<CheckBoxIcon
					id="allow-controls"
					image={ZoomControlIcon}
					checked={snap.controls}
					onChange={(e) => {
						state.controls = e.target.checked;
					}}
				/>
			</div>
		</div>
	);
};

export default EditTab;
