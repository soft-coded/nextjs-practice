import Link from "next/link";
import React from "react";

import styles from "./event-item.module.css";

export default function EventItem(props) {
	return (
		<li className={styles.item}>
			<img src={"/" + props.image} alt={props.title} />
			<div>
				<div>
					<h2>{props.title}</h2>
					<div>
						<time>{new Date(props.date).toLocaleDateString()}</time>
					</div>
					<div>
						<address>{props.location.replace(/, /g, "\n")}</address>
					</div>
				</div>
				<div>
					<Link href={`/events/${props.id}`}>Explore event</Link>
				</div>
			</div>
		</li>
	);
}
