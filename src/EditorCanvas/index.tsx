"use client";

import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
import { useSnapshot } from "valtio";
import state from "@/store";

const EditorCanvas = () => {
	const snap = useSnapshot(state);
	return (
		<div className="absolute inset-0 w-full h-full">
			<Canvas
				shadows
				onClick={() => (state.currentEditorTab = null)}
				camera={{ position: [0, 0, 2], fov: 25 }}
				gl={{ preserveDrawingBuffer: true }}
				className={`w-full max-w-full h-full transition-all ease-in ${
					snap.controls && "cursor-zoom-in"
				}`}
			>
				{/* Add background image if the transparentBackgroundProperty is false */}
				{!snap.transparentBackground && (
					<color attach={"background"} args={[snap.backgroundColor]} />
				)}

				<ambientLight intensity={0.45} />

				<Environment preset="city" />
				{snap.controls && (
					<OrbitControls enablePan={false} enableRotate={false} />
				)}
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
