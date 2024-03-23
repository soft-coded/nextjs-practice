import { useRouter } from "next/router";
import React from "react";

import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";

export default function EventPage() {
	const { eventId } = useRouter().query;
	const eventDetails = getEventById(eventId);

	if (!eventDetails) {
		return <h1>No event found</h1>;
	}

	return (
		<>
			<EventSummary {...eventDetails} />
			<EventLogistics
				{...eventDetails}
				imageAlt={eventDetails.title}
				address={eventDetails.location}
			/>
			<EventContent>
				<p>{eventDetails.description}</p>
			</EventContent>
		</>
	);
}
