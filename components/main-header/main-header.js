import Link from "next/link";
import React from "react";

import styles from "./header.module.css";

export default function MainHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">NextJS Test</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link href="/events">All events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
