import React from "react";

import EventItem from "../event-item/event-item";
import styles from "./event-list.module.css";

export default function EventList(props) {
	return (
		<ul className={styles.list}>
			{props.items.map((item, i) => (
				<EventItem key={i} {...item} />
			))}
		</ul>
	);
}
