import state from "@/store";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { ReactNode, useRef } from "react";
import { Group } from "three";
import { useSnapshot } from "valtio";

const CameraRig = ({ children }: { children: ReactNode }) => {
	const grp = useRef<Group | null>(null);
	const snap = useSnapshot(state);

	useFrame((state, delta) => {
		if (grp.current) {
			const { current: groupCurr } = grp;
			easing.dampE(
				groupCurr.rotation,
				[state.pointer.y / 10, -state.pointer.x / 10, 0],
				0.25,
				delta
			);
		}
	});

	return <group ref={grp}>{children}</group>;
};

export default CameraRig;
