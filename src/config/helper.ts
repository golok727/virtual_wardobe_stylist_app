import state from "@/store";
import { useSnapshot } from "valtio";

export const getContrastingColor = (color: string) => {
	// Remove the '#' character if it exists
	const hex = color.replace("#", "");

	// Convert the hex string to RGB values
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// Calculate the brightness of the color
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	// Return black or white depending on the brightness
	return brightness > 128 ? "black" : "white";
};

export const fileReader = (
	file: File,
	onLoad: (fileReader: FileReader, ev: ProgressEvent<FileReader>) => void
) => {
	const reader = new FileReader();

	reader.onload = (ev) => {
		onLoad(reader, ev);
	};

	reader.readAsDataURL(file);
};

export const canvasToDataUrl = async () => {
	return new Promise<string>((resolve, reject) => {
		state.isSaving = true;

		setTimeout(() => {
			const canvas = document.querySelector("canvas") as HTMLCanvasElement;
			const mobileAspectRatio = 3 / 4; // Aspect ratio for the mobile version (3:4)

			const canvasAspectRatio = canvas.width / canvas.height;
			let centerWidth, centerHeight, centerX, centerY;

			if (canvasAspectRatio > mobileAspectRatio) {
				centerHeight = canvas.height;
				centerWidth = centerHeight * mobileAspectRatio;
				centerX = (canvas.width - centerWidth) / 2;
				centerY = 0;
			} else {
				centerWidth = canvas.width;
				centerHeight = centerWidth / mobileAspectRatio;
				centerX = 0;
				centerY = (canvas.height - centerHeight) / 2;
			}

			// Create a temporary canvas to hold the center part
			const tempCanvas = document.createElement("canvas");
			tempCanvas.width = centerWidth;
			tempCanvas.height = centerHeight;

			const tempContext = tempCanvas.getContext(
				"2d"
			) as CanvasRenderingContext2D;

			// Draw the center part onto the temporary canvas
			tempContext.drawImage(
				canvas,
				centerX,
				centerY,
				centerWidth,
				centerHeight,
				0,
				0,
				centerWidth,
				centerHeight
			);

			const dataURL = tempCanvas.toDataURL();
			resolve(dataURL);
			state.isSaving = false;
		}, 1000);
	});
};

export const downloadCanvasToImage = async () => {
	const dataURL = await canvasToDataUrl();
	const link = document.createElement("a");

	link.href = dataURL;
	link.download = `shirt${Math.floor(Math.random()) * 1000}-${Date.now()}.png`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
