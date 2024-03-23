import { useRouter } from "next/router";
import React from "react";

import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/event-list/event-list";

export default function EventsSlugPage() {
	const slug = useRouter()?.query?.slug;
	if (!slug) return null;

	const [year, month] = slug;
	const events = getFilteredEvents({ year: +year, month: +month });

	if (!events || events.length === 0) {
		return <h3>No events</h3>;
	}

	return <EventList items={events} />;
}
