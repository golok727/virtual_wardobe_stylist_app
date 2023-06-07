import { TextureBlendMode } from "@/store";
import {
	FileIcon,
	ColorWheelIcon,
	IconShirt,
	IconJeans,
	IconShorts,
	WomansPajamaIcon,
	EditIcon,
} from "@/assets";

export const EditorTabNames = {
	COLOR_PICKER: "COLOR_PICKER",
	FILE_PICKER: "FILE_PICKER",
	EDIT: "EDIT",
};
export const EditorTabsList = [
	{ name: EditorTabNames.COLOR_PICKER, icon: ColorWheelIcon },
	{ name: EditorTabNames.FILE_PICKER, icon: FileIcon },
	{ name: EditorTabNames.EDIT, icon: EditIcon },
];

export const EditorClothTypeTabList = [
	{ name: "shirt", icon: IconShirt },
	{ name: "jeans", icon: IconJeans },
	{ name: "shorts", icon: IconShorts },
	{ name: "womans-pajama", icon: WomansPajamaIcon },
];

export const textureBlendModes: { name: string; type: TextureBlendMode }[] = [
	{ name: "Normal", type: "NORMAL" },
	{ name: "Multiply", type: "MULTIPLY" },
	{ name: "Add", type: "ADD" },
	{ name: "Subtract", type: "SUBTRACT" },
];
export const sampleColorPalette = [
	// Light Colors
	"#F5E7E2", // Light Pink
	"#E5E8E8", // Light Gray
	"#FAF3DD", // Light Beige

	// Mid Colors
	"#D5C3C1", // Dusty Rose
	"#B8B8B8", // Mid Gray
	"#C8BFAF", // Sand

	// Saturated Colors
	"#F25C54", // Coral
	"#488BA7", // Teal Blue
	"#FFBF00", // Bright Yellow

	"#FF3E4D", // Red
	"#FFB81C", // Orange
	"#FF5F00", // Orange-Red
	"#FF8A00", // Orange-Yellow
	"#FFD900", // Yellow
	"#A6E22E", // Lime Green
	"#7FDBFF", // Cyan
	"#39CCCC", // Teal
	"#3D9970", // Green
	"#2ECC40", // Emerald Green
	"#0074D9", // Blue
	"#001F3F", // Navy Blue
	"#AAAAAA", // Gray
	"#DDDDDD", // Light Gray
	"#FFFFFF", // White
	"#111111", // Black
	"#F012BE", // Magenta
	"#B10DC9", // Purple
	"#85144B", // Dark Red
	"#4F4F4F", // Dark Gray
	"#007AFF", // Dodger Blue
];
