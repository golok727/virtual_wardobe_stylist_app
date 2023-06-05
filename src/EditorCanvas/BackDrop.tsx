import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import React, { useRef } from "react";

const BackDrop = () => {
	const shadows = useRef<any>();
	return (
		<AccumulativeShadows
			ref={shadows}
			position={[0, 0, -0.14]}
			temporal
			frames={60}
			scale={10}
			alphaTest={0.85}
			rotation={[Math.PI / 2, 0, 0]}
		>
			<RandomizedLight
				amount={4}
				radius={9}
				intensity={0.26}
				ambient={0.45}
				position={[-10, 3, -5]}
			/>
			<RandomizedLight
				amount={5}
				radius={10}
				intensity={0.61}
				ambient={1.3}
				position={[-5, 5, -14]}
			/>
		</AccumulativeShadows>
	);
};

export default BackDrop;
