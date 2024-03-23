import Link from "next/link";
import React from "react";

import styles from "./event-item.module.css";
import Button from "../button/button";

export default function EventItem(props) {
	return (
		<li className={styles.item}>
			<img src={"/" + props.image} alt={props.title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{props.title}</h2>
					<div className={styles.date}>
						<time>{new Date(props.date).toLocaleDateString()}</time>
					</div>
					<div className={styles.address}>
						<address>{props.location.replace(/, /g, "\n")}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${props.id}`}>Explore event</Button>
				</div>
			</div>
		</li>
	);
}
