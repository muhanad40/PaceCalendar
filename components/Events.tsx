import { useLayoutEffect, useRef } from 'react';

import { IEvent, IAddedEvent } from '../types';
import { findOverlappingEvents, getSuitableEventBlockLeftPx } from '../utils';
import Event from './Event';

interface IProps {
	events: IEvent[];
}

export default function Events({ events }: IProps) {
  
	const addedEventsToScreen = useRef<IAddedEvent[]>([]);

	useLayoutEffect(() => {
		// 1) Iterate over all events
		addedEventsToScreen.current.forEach((addedEvent) => {
			// 2) Find only overlapping events
			const overlappingEvents = findOverlappingEvents(addedEventsToScreen.current, addedEvent);

			// 3) Find furthest event block from the left
			const leftPx = getSuitableEventBlockLeftPx(overlappingEvents.map(event => event.element));

			// 4) Push event block from the left if needed to avoid overlapping with other event blocks
			addedEvent.element.style.left = leftPx > 0 ? `${leftPx}px` : 'inherit';
			addedEvent.element.style.display = 'inherit';
		});
	}, [addedEventsToScreen.current]);

	return (
		<div className="events">
			{events.map((event) => (
				<Event
					event={event}
					key={event.id}
					ref={(el: HTMLElement) => addedEventsToScreen.current.push({ ...event, element: el })}
				/>
			))}
		</div>
	)
}