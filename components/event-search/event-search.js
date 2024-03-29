import React, { useRef } from "react";
import { useRouter } from "next/router";

import styles from "./search.module.css";
import Button from "../button/button";

export default function EventSearch(props) {
	const yearRef = useRef();
	const monthRef = useRef();
	const router = useRouter();

	function handleSubmit(e) {
		e.preventDefault();
		const year = yearRef.current.value;
		const month = monthRef.current.value;

		router.push(`/events/${year}/${month}`);
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="year">Year</label>
					<select name="year" id="year" ref={yearRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={styles.control}>
					<label htmlFor="month">Month</label>
					<select name="month" id="month" ref={monthRef}>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>
			<Button>Search</Button>
		</form>
	);
}
