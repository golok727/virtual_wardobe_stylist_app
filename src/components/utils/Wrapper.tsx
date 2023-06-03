import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
	return <div className="mx-auto max-w-4xl">{children}</div>;
};

export default Wrapper;
