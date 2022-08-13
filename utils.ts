import { IEvent, IAddedEvent } from './types';

export function findOverlappingEvents(events: IAddedEvent[] = [], { id, start, end }: Partial<IEvent>) {
	const overlappingEvents: IAddedEvent[] = [];

	events.forEach((event) => {
		if (id === event.id) return; // skip same event

		if (end > event.start && start < event.end) {
			overlappingEvents.push(event)
		}
	});

	return overlappingEvents;
}

// Try saying this function name three times quickly....naming things ay :D
export function getSuitableEventBlockLeftPx(elements: HTMLElement[] = []) {
	let furthestPx = 0;

	elements.forEach(el => {
		const rightEdgeDistancePx = el.getBoundingClientRect().right;

		if (rightEdgeDistancePx > furthestPx) {
			furthestPx = rightEdgeDistancePx;
		}
	});

	return furthestPx;
}