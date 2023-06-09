import { EditorTabNames } from "@/config/constants";
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
	currentEditorTab: keyof typeof EditorTabNames | null;
	shirtPos: {
		x: number;
		y: number;
		z: number;
	};
	isSaving: boolean;
}
const state = proxy<AppState>({
	// App state
	recentSwatches: [],
	controls: false,
	currentEditorTab: null,
	isSaving: false,
	shirtPos: {
		x: 0,
		y: 0.04,
		z: 0.1,
	},

	// background
	transparentBackground: true,
	backgroundColor: "#FFFFFF",

	// Texture
	color: "#F09042",
	isLogoTexture: true,
	isFullTexture: false,
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
