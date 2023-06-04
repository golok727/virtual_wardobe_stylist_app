import { proxy } from "valtio";

const state = proxy({
	color: "#333",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./app_logo_white.png",
	fullDecal: "./app_logo_white.png",
});

export default state;
