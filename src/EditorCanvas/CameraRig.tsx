import AppState from "@/store";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { ReactNode, useRef } from "react";
import { Group } from "three";
import { useSnapshot } from "valtio";

easing;
const CameraRig = ({ children }: { children: ReactNode }) => {
	const groupRef = useRef<Group | null>(null);
	const snap = useSnapshot(AppState);

	useFrame((state, delta) => {
		if (groupRef.current) {
			const { current: group } = groupRef;

			easing.dampE(
				group.rotation,
				[
					snap.isSaving ? 0 : state.pointer.y / 10,
					snap.isSaving ? 0 : -state.pointer.x / 5,
					0,
				],
				0.25,
				delta
			);
		}
	});
	return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;
