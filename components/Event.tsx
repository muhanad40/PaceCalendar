import React from 'react';

import { IEvent } from "../types";

interface IProps {
	event: IEvent,
}

const Event = React.forwardRef<HTMLDivElement, IProps>(({ event: { start, end, title } }: IProps, ref) => {
	const eventBlockHeight = 50;
	const startHour = start / 60;
	const eventLengthMins = (end - start);
	const heightPx = (eventLengthMins / 60) * eventBlockHeight;

	return (
		<div
			className="event"
			title={title}
			key={title}
			ref={ref}
			style={{
				display: 'none', // Hide until it's positioned correctly on screen
				height:`calc(${heightPx}px - 2px)`,
				top: `${eventBlockHeight * startHour}px`,
		}}>
			{title}
		</div>
	)
});

export default Event;
