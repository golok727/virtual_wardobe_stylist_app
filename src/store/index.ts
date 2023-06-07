import { proxy } from "valtio";

export type TextureBlendMode = "NORMAL" | "MULTIPLY" | "ADD" | "SUBTRACT";

interface AppState {
	color: string;
	transparentBackground: boolean;
	backgroundColor: string;
	isLogoTexture: boolean;
	isFullTexture: boolean;
	logoDecal: string;
	fullDecal: string;
	textureBlending: TextureBlendMode;
	logoScale: number;
	controls: boolean;
	recentSwatches: string[];
}
const state = proxy<AppState>({
	recentSwatches: [],
	controls: false,
	color: "#F09042",
	transparentBackground: true,
	backgroundColor: "#FFFFFF",
	isLogoTexture: true,
	isFullTexture: true,
	logoDecal: "./radha-krsna.png",
	fullDecal: "./pattern.jpg",
	textureBlending: "NORMAL",
	logoScale: 1.0,
	// logoDecal: "./threejs.png",
	// fullDecal: "./threejs.png",
	// logoDecal: "./fairy_ins.jpg",
	// fullDecal: "./fairy_ins.jpg",
});

export default state;
