import React from "react";
import Wrapper from "./utils/Wrapper";
import Link from "next/link";

const Hero = () => {
	return (
		<Wrapper>
			<div className="my-20">
				<header className="fade-in flex flex-col items-center justify-center mt-20 fade-in transition-all duration-150">
					<div className="py-3 px-6 rounded-md font-bold lg:text-6xl text-3xl bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
						<h1 className="">Virtual Wardobe Stylist</h1>
					</div>

					<div className="my-4">
						<div className="grid place-items-center gap-7 text-xl relative">
							<span className="font-bold text-white bg-red-600 rounded-full px-5 py-2 lg:text-xl text-sm shadow-xl">
								Revamp Your Style with Virtual Wardrobe Stylist:
							</span>{" "}
							{/* Down */}
							<span className="relative font-bold text-white bg-indigo-900 rounded-full lg:text-2xl text-base px-5 py-2 block w-fit shadow-xl">
								<span className="scale-text scale-delay-1 cursor-pointer">
									Discover,&nbsp;{" "}
								</span>
								<span className="scale-text scale-delay-2 cursor-pointer">
									Create,&nbsp;{" "}
								</span>{" "}
								and{" "}
								<span className="scale-text scale-delay-3 cursor-pointer">
									Elevate
								</span>{" "}
								Your Fashion With
							</span>
							<Link href={"/signup"}>
								<span className="hero_blob fade-in fade-delay-2">AI!</span>
							</Link>
						</div>
					</div>
				</header>
			</div>
		</Wrapper>
	);
};

export default Hero;
