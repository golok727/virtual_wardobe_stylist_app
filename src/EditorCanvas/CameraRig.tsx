import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { ReactNode, useRef } from "react";
import { Group } from "three";

easing;
const CameraRig = ({ children }: { children: ReactNode }) => {
	const groupRef = useRef<Group | null>(null);

	useFrame((state, delta) => {
		if (groupRef.current) {
			const { current: group } = groupRef;

			easing.dampE(
				group.rotation,
				[state.pointer.y / 10, -state.pointer.x / 5, 0],
				0.25,
				delta
			);
		}
	});
	return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;
