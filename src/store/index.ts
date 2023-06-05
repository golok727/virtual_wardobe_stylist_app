import { proxy } from "valtio";

const state = proxy({
	color: "#333333",
	isLogoTexture: true,
	isFullTexture: true,
	// logoDecal: "./threejs.png",
	logoDecal: "./radha-krsna.png",
	// fullDecal: "./threejs.png",
	fullDecal: "./pattern.jpg",
	// logoDecal: "./fairy_ins.jpg",
	// fullDecal: "./fairy_ins.jpg",
});

export default state;
