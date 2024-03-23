import React from "react";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list/event-list";

export default function Homepage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}
