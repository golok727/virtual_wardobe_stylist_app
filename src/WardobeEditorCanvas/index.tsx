"use client";
import React from "react";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

const WardobeEditorCanvas = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas
				className="w-full max-w-full h-full transition-all ease-in"
				shadows
				camera={{ position: [0, 0, 2], fov: 25 }}
				gl={{ preserveDrawingBuffer: true }}
			>
				<ambientLight intensity={0.5} />
				<Environment preset="city" />
				<CameraRig>
					<Center>
						<Shirt />
					</Center>
				</CameraRig>
			</Canvas>
		</div>
	);
};

export default WardobeEditorCanvas;
