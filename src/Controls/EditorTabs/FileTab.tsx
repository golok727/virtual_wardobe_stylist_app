import { DesignIcon, StickerIcon } from "@/assets";
import FilePicker from "@/components/FilePicker";
import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";
import CheckBox from "@/components/CheckBox";
import { textureBlendModes } from "@/config/constants";
const FileTab = () => {
	const snap = useSnapshot(state);
	return (
		<div>
			<section className="grid gap-2">
				<SectionWrapper>
					<FilePicker
						text={"Choose a print"}
						onChange={() => {}}
						id="print-file"
						icon={StickerIcon}
					/>

					<CheckBox
						text="Apply Print"
						id="apply-print"
						onChange={(ev) => (state.isLogoTexture = ev.target.checked)}
						checked={snap.isLogoTexture}
					/>
				</SectionWrapper>

				{/* Texture */}
				<SectionWrapper>
					<FilePicker
						text={"Choose a texture"}
						onChange={() => {}}
						id="pattern-file"
						icon={DesignIcon}
					/>

					<CheckBox
						text="Apply Texture"
						id="apply-print"
						onChange={(ev) => (state.isFullTexture = ev.target.checked)}
						checked={snap.isFullTexture}
					/>

					{/* BlendModes */}

					{snap.isFullTexture && (
						<SectionWrapper>
							<div className="grid gap-2">
								<label className="text-xs font-bold" htmlFor="blend-modes">
									Blending
								</label>
								<select
									name="blend-modes"
									id="blend-modes"
									onChange={(e) => console.log(e.target.value)}
								>
									{textureBlendModes.map((blendMode) => (
										<option value={blendMode.type} key={blendMode.name}>
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

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="bg-black bg-opacity-10 p-2 rounded">{children}</div>;
};

export default FileTab;
