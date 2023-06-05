"use client";

import { Environment, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import BackDrop from "./BackDrop";

const EditorCanvas = () => {
	return (
		<div
			style={{ width: "100%", height: "100%", cursor: "grab" }}
			className="absolute inset-0"
		>
			<Canvas
				shadows
				camera={{ position: [0, 0, 2], fov: 25 }}
				gl={{ preserveDrawingBuffer: true }}
				className="w-full max-w-full h-full transition-all ease-in"
			>
				<ambientLight intensity={0.45} />
				<Environment preset="city" />
				{/* <OrbitControls enablePan={true} enableRotate={false} /> */}
				<CameraRig>
					<BackDrop />
					<Center>
						<Shirt />
					</Center>
				</CameraRig>
			</Canvas>
		</div>
	);
};

export default EditorCanvas;
