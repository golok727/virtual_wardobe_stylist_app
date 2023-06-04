"use client";
import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";

const Controls = () => {
	const snap = useSnapshot(state);
	return (
		<div className="absolute top-0 z-[100] ">
			<input
				type="color"
				value={snap.color}
				onChange={(e) => (state.color = e.target.value)}
			/>
		</div>
	);
};

export default Controls;
