import { proxy } from "valtio";

const state = proxy({
	color: "#F09042",
	transparentBackground: true, 
	backgroundColor: "#FFFFFF",
	isLogoTexture: true,
	isFullTexture: true,
	logoDecal: "./radha-krsna.png",
	fullDecal: "./pattern.jpg",

	// logoDecal: "./threejs.png",
	// fullDecal: "./threejs.png",
	// logoDecal: "./fairy_ins.jpg",
	// fullDecal: "./fairy_ins.jpg",
});

export default state;
