// import AddressIcon from "../icons/address-icon";
// import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
	const { date, address, image, imageAlt } = props;

	const humanReadableDate = new Date(date).toLocaleDateString();
	const addressText = address.replace(", ", "\n");

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul className={classes.list}>
				{/* <LogisticsItem icon={DateIcon}> */}
				<LogisticsItem>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				{/* <LogisticsItem icon={AddressIcon}> */}
				<LogisticsItem>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;
