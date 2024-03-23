import { useRouter } from "next/router";
import React from "react";

import { getEventById } from "../../../dummy-data";

export default function EventPage() {
	const { eventId } = useRouter().query;
	const eventDetails = getEventById(eventId);

	return <div>EventPage</div>;
}
