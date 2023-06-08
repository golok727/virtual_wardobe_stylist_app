import { DesignIcon, StickerIcon } from "@/assets";
import CheckBox from "@/components/CheckBox";
import CheckBoxIcon from "@/components/CheckBoxIcon";
import FilePicker from "@/components/FilePicker";
import SectionWrapper from "@/components/SectionWrapper";
import { textureBlendModes } from "@/config/constants";
import { fileReader } from "@/config/helper";
import state, { TextureBlendMode } from "@/store";
import { ChangeEvent } from "react";
import { useSnapshot } from "valtio";

const FileTab = () => {
	const snap = useSnapshot(state);

	const handleLogoFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const _id = e.target.id;
			if (file) {
				fileReader(file, (reader) => {
					if (_id === "logo-file") state.logoDecal = reader.result as string;
					else if (_id === "pattern-file")
						state.fullDecal = reader.result as string;
				});
			}
		}
	};

	return (
		<div>
			<section className="grid gap-2">
				<div className="flex gap-2 border-b-[1px] border-b-neutral-300 py-2">
					<CheckBoxIcon
						image={StickerIcon}
						id="apply-print"
						onChange={(ev) => (state.isLogoTexture = ev.target.checked)}
						checked={snap.isLogoTexture}
					/>

					<CheckBoxIcon
						image={DesignIcon}
						id="apply-print"
						onChange={(ev) => (state.isFullTexture = ev.target.checked)}
						checked={snap.isFullTexture}
					/>
				</div>

				<SectionWrapper>
					<FilePicker
						text={"Choose a print"}
						onChange={handleLogoFileChange}
						id="logo-file"
						icon={StickerIcon}
					/>
				</SectionWrapper>

				{/* Texture */}
				<SectionWrapper>
					<FilePicker
						text={"Choose a texture"}
						onChange={handleLogoFileChange}
						id="pattern-file"
						icon={DesignIcon}
					/>

					{/* BlendModes */}

					{snap.isFullTexture && (
						<SectionWrapper customStyles="mt-2">
							<div className="grid gap-2">
								<label className="text-xs font-bold" htmlFor="blend-modes">
									Blending
								</label>
								<select
									className="appearance-none font-bold text-white rounded-md px-2 py-1 bg-[rgb(235,44,108)] hover:scale-105 transition-all cursor-pointer"
									name="blend-modes"
									id="blend-modes"
									value={snap.textureBlending}
									onChange={(e) =>
										(state.textureBlending = e.target.value as TextureBlendMode)
									}
								>
									{textureBlendModes.map((blendMode) => (
										<option
											className="text-sm bg-gray-700"
											value={blendMode.type}
											key={blendMode.name}
										>
											{blendMode.name}
										</option>
									))}
								</select>
							</div>
						</SectionWrapper>
					)}
				</SectionWrapper>
			</section>
		</div>
	);
};

export default FileTab;
