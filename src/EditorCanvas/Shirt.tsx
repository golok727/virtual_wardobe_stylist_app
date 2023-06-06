import React from "react";
import { easing } from "maath";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "@/store";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Shirt = () => {
	const snap = useSnapshot(state);
	const { nodes, materials } = useGLTF("/shirt_baked.glb") as any;

	useFrame((_, delta) => {
		easing.dampC(materials.lambert1.color, state.color, 0.25, delta);
	});

	const fullTexture = useTexture(snap.fullDecal);
	const printTexture = useTexture(snap.logoDecal);

	const currStateString = JSON.stringify(state);
	return (
		<group key={currStateString}>
			<mesh
				castShadow
				position={[0, 0, 0]}
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				material-roughness={0.9}
				dispose={null}
			>
				{snap.isFullTexture && (
					<Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
						<meshStandardMaterial
							map={fullTexture}
							blending={THREE.MultiplyBlending}
							transparent={true}
							roughness={0.7}
						/>
					</Decal>
				)}

				{/* {snap.isFullTexture && (
					<Decal
						position={[0.1, -0.21, 0]}
						rotation={[0, 0, 0]}
						map={fullTexture}
						blendDstAlpha={0.22}
						blending={2}
						scale={1}
					/>
				)} */}

				{snap.isLogoTexture && (
					<Decal
						map={printTexture}
						scale={0.2}
						position={[0, 0.04, 0.1]}
						rotation={[0, 0, 0]}
						map-anisotropy={16}
						blendEquation={102}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
		</group>
	);
};

export default Shirt;
