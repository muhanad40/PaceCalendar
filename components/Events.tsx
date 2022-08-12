import { IEvent } from '../types';

interface IProps {
	events: IEvent[];
}

export default function Events({ events }: IProps) {
  const eventBlockHeight = 50;

	return (
		<div className="events">
			{events.map(({ start, end, title }) => {
				const startHour = start / 60;
				const eventLengthMins = (end - start);
				const heightPx = (eventLengthMins / 60) * eventBlockHeight;

				return (
					<div
						className="event"
						title={title}
						key={title}
						style={{
							height:`calc(${heightPx}px - 2px)`,
							top: `${eventBlockHeight * startHour}px`,
					}}>
						{title}
					</div>
				)
			})}
		</div>
	)
}