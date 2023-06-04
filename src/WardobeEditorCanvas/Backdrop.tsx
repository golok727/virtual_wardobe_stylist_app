import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { easing } from "maath";
import React from "react";

const Backdrop = () => {
	return (
		<AccumulativeShadows
			position={[0, 0, -0.14]}
			temporal
			frames={60}
			alphaTest={0.85}
			scale={10}
			rotation={[Math.PI / 2, 0, 0]}
		>
			<RandomizedLight
				amount={4}
				radius={9}
				intensity={0.23}
				ambient={0.25}
				position={[-5, 5, -4]}
			/>
			<RandomizedLight
				amount={4}
				radius={9}
				intensity={0.57}
				ambient={0.25}
				position={[5, 5, -10]}
			/>
		</AccumulativeShadows>
	);
};

export default Backdrop;
