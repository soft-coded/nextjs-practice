import React from "react";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list/event-list";
import EventSearch from "../../components/event-search/event-search";

export default function EventsPage() {
	const events = getAllEvents();

	return (
		<>
			<EventSearch />
			<EventList items={events} />
		</>
	);
}
