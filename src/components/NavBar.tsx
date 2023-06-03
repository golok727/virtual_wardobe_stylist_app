"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const NavBar = () => {
	return (
		<div className="sticky top-0 py-2 px-2 lg:px-0 fade-in fade-delay-1 z-10">
			<nav className="nav_styles">
				<div>
					<h3 className="font-bold text-xl">VWardobe</h3>
				</div>

				<ul className="lg:flex gap-4 ul_items hidden">
					<li className="nav_links">
						<Link href={"_blank"}>Product</Link>
					</li>

					<li className="nav_links">
						<Link href={"_blank"}>Pricing</Link>
					</li>

					<li className="nav_links">
						<Link href={"_blank"}>AboutUs</Link>
					</li>
				</ul>

				{/* <SignInButton/> */}
				<div className="flex gap-2">
					<Link href={"/login"}>
						<Button variant="outline">Sign In</Button>
					</Link>

					<Link href={"/signup"}>
						<Button>Sign Up</Button>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
