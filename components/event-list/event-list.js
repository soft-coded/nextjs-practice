import React from "react";
import EventItem from "../event-item/event-item";

export default function EventList(props) {
	return (
		<ul>
			{props.items.map((item, i) => (
				<EventItem key={i} {...item} />
			))}
		</ul>
	);
}
