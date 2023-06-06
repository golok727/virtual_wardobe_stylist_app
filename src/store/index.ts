import { proxy } from "valtio";

export type TextureBlendMode = "MULTIPLY" | "ADD" | "SUBTRACT" | "SCREEN";

interface AppState {
	color: string;
	transparentBackground: boolean;
	backgroundColor: string;
	isLogoTexture: boolean;
	isFullTexture: boolean;
	logoDecal: string;
	fullDecal: string;
	textureBlending: TextureBlendMode;
}
const state = proxy<AppState>({
	color: "#F09042",
	transparentBackground: true,
	backgroundColor: "#FFFFFF",
	isLogoTexture: true,
	isFullTexture: true,
	logoDecal: "./radha-krsna.png",
	fullDecal: "./pattern.jpg",
	textureBlending: "MULTIPLY",
	// logoDecal: "./threejs.png",
	// fullDecal: "./threejs.png",
	// logoDecal: "./fairy_ins.jpg",
	// fullDecal: "./fairy_ins.jpg",
});

export default state;
