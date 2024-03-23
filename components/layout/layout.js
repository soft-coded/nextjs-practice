import React from "react";

import MainHeader from "../main-header/main-header";

export default function Layout(props) {
	return (
		<>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
}
